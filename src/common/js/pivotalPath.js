export default class PivotalPath {
    constructor(param = { task: [], links: [], callback: () => {} }) {
        this.allTaskData = param.task;
        this.allLinks = param.links;
        this.pivotalTask = new Set();
        this.pivotalLinks = new Set();
        this.findEndTimeTask(this.allTaskData);
        this.findEndTimeSource();
        param.callback(this.setToArray(this.pivotalTask), this.setToArray(this.pivotalLinks));
    }
    /**
     * 通过 source 查找对应的任务数据
     * @param {array} aData 任务数据
     * @param {array} aLinks 连接数据
     * @return {*}
     */
    sourceToTask=(aData, aLinks) => {
        let data = [];
        aLinks.forEach((item) => {
            let filter = aData.filter((data) => data.id === item.source);
            if (filter.length === 0) return;
            data = data.concat(filter);
        });
        if (data.length === 0) return;
        this.findEndTimeTask(data);
    };
    /**
     * 通过任务找出 source
     * @param {array} aData 任务数据
     * @param {array} aLinks 任务数据
     * @param {boolean} isReturn 是否只返回数据
     * @return {*}
     */
    taskToSource=(aData, aLinks, isReturn = false) => {
        let aSource = new Set();
        aData.forEach((item) => {
            let a = aLinks.filter((link) => link.target === item.id);
            if (a.length > 0) {
                aSource.add(a);
            }
        });
        if (aSource.length === 0) return;
        if (isReturn) {
            return aSource;
        }
        aSource.forEach((item) => {
            this.sourceToTask(this.allTaskData, item);
        });
    };
    /**
     * 找出时间最后的任务
     * @param {array} aData 任务数据
     * @return {*}
     */
    findEndTimeTask=(aData) => {
        let aEndTask = new Set();
        let endTime;
        aData.forEach((item) => {
            if (!item.isParent) {
                if (endTime) {
                    if (endTime > item.endDate) return;
                    if (endTime < item.endDate) {
                        endTime = item.endDate;
                        aEndTask.clear();
                    }
                    aEndTask.add(item);
                } else {
                    endTime = item.endDate;
                    aEndTask.add(item);
                }
            }
        });
        this.pivotalTask = this.concatSet(this.pivotalTask, aEndTask);
        this.taskToSource(aEndTask, this.allLinks);
    };
    /**
     * 找出结束时间最长的 source
     * @return {*}
     */
    findEndTimeSource=() => {
        this.pivotalTask.forEach((task) => {
            this.allLinks.forEach((link) => {
                if (task.id === link.source) {
                    this.pivotalLinks.add(link);
                }
            });
        });
    };
    /**
     * 合并两个 Set 的数据
     * @param {Set} a
     * @param {Set} b
     * @return {*}
     */
    concatSet=(a, b) => {
        return new Set([...a, ...b]);
    };
    /**
     * set 集合转化成数组
     * @param {set} a
     * @return {*}
     */
    setToArray=(a) => {
        return Array.from(a);
    }
}
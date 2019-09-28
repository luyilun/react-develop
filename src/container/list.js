import React from 'react';
import { Link } from 'react-router-dom';
import PivotalPath from 'src/common/js/pivotalPath';

const taskData = {
    'data': [
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 1,
            'dataClass': 'task',
            'endDate': '2019-08-24 23:59:59',
            'id': 'A7459B184F8CB4BD0997588BAC6D60BCA',
            'isParent': false,
            'linkId': 'A10A887138A87423FB4C9B3EEDA235EFA',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 1,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1.3',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1.1'
        },
        {
            'checkIds': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'children': [
                'AC1E021F359554F999C7D40C3FA527628'
            ],
            'code': 1,
            'dataClass': 'schedule',
            'endDate': '2019-11-30 23:59:59',
            'id': 'A7D0547AE7ABF4307AF16ED9F3F9A2B54',
            'isParent': true,
            'linkId': 'AA7594A4D4DA043FBAD2450BAAA3C953F',
            'ownerId': 'AF50BEB72466D45F3B90405908EA7C314',
            'parent': '-1',
            'power': 0,
            'progress': 0.0,
            'sortId': 1,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '项目总体策划',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 1,
            'dataClass': 'task',
            'endDate': '2019-08-29 23:59:59',
            'id': 'A8CC5399845B94CE1BB6BE87EEE844098',
            'isParent': false,
            'linkId': 'A3B5BB2BF897449688FAC2A41EB915ED9',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A44D28CBFD4DE4B3580220B2D51A009E2',
            'power': 0,
            'progress': 0.0,
            'sortId': 1,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计2新任務',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'A660029128B45408889CC60DC886D7F99'
            ],
            'wbs': '1.2.1.5.1'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'children': [
                'AB6754D288B8541B38FF38B4D98B1A059',
                'A3CC159E5898D4160AE635AD7ACFD6617',
                'AB07EF5C607D648828F78359C33A3A2A3',
                'ACFD26223A86241A5AA4D0645E016F416',
                'A10A887138A87423FB4C9B3EEDA235EFA',
                'AFCA426F2864A4C61A2D49DB252B27D51',
                'AF2A24CDC941B4372A9E4BAEA074C86FC'
            ],
            'code': 1,
            'dataClass': 'task',
            'endDate': '2019-08-31 23:59:59',
            'id': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'isParent': true,
            'linkId': 'A88B5D0516DC14D83B8CCAEAC6BABA6AB',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'AEB003D1F534C4CD29F6CEFF69102E9FE',
            'power': 0,
            'progress': 0.0,
            'sortId': 1,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1'
        },
        {
            'checkIds': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'children': [
                'A88B5D0516DC14D83B8CCAEAC6BABA6AB'
            ],
            'code': 2,
            'dataClass': 'schedule',
            'endDate': '2019-08-31 23:59:59',
            'id': 'AEB003D1F534C4CD29F6CEFF69102E9FE',
            'isParent': true,
            'linkId': 'AC1E021F359554F999C7D40C3FA527628',
            'ownerId': 'AF50BEB72466D45F3B90405908EA7C314',
            'parent': 'A7D0547AE7ABF4307AF16ED9F3F9A2B54',
            'power': 0,
            'progress': 0.0,
            'sortId': 2,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计阶段',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 2,
            'dataClass': 'task',
            'endDate': '2019-08-22 23:59:59',
            'id': 'AC0FD836039E94B7DA5CE3E62CDB7F350',
            'isParent': false,
            'linkId': 'AB6754D288B8541B38FF38B4D98B1A059',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 2,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1.1',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1.2'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 3,
            'dataClass': 'task',
            'endDate': '2019-08-24 23:59:59',
            'id': 'AB7A377B83C6541CAA6BDF25D5DA8443B',
            'isParent': false,
            'linkId': 'AB07EF5C607D648828F78359C33A3A2A3',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 3,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1.4',
            'type': '',
            'unscheduled': false,
            'wbs': '1.2.1.3'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 4,
            'dataClass': 'task',
            'endDate': '2019-08-30 23:59:59',
            'id': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'isParent': false,
            'linkId': 'A3CC159E5898D4160AE635AD7ACFD6617',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 4,
            'startDate': '2019-08-25 00:00:00',
            'taskCode': '',
            'text': '设计1新任務',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1.4'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'children': [
                'A3B5BB2BF897449688FAC2A41EB915ED9'
            ],
            'code': 5,
            'dataClass': 'task',
            'endDate': '2019-08-29 23:59:59',
            'id': 'A44D28CBFD4DE4B3580220B2D51A009E2',
            'isParent': true,
            'linkId': 'AF2A24CDC941B4372A9E4BAEA074C86FC',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 5,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1.2',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'A660029128B45408889CC60DC886D7F99'
            ],
            'wbs': '1.2.1.5'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 6,
            'dataClass': 'task',
            'endDate': '2019-08-24 23:59:59',
            'id': 'AEDBF4D73D8304649B64A95B83137435B',
            'isParent': false,
            'linkId': 'AFCA426F2864A4C61A2D49DB252B27D51',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 6,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1.3',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1.6'
        },
        {
            'checkIds': [
                'A33289155DB8A4984AC16385D0A7BC1CA'
            ],
            'code': 7,
            'dataClass': 'task',
            'endDate': '2019-08-30 23:59:59',
            'id': 'A81F7ECF1061E434FA4D5B6E0F2396B44',
            'isParent': false,
            'linkId': 'ACFD26223A86241A5AA4D0645E016F416',
            'ownerId': 'A33289155DB8A4984AC16385D0A7BC1CA',
            'parent': 'A5C6D888F4FBA49578EFBE5E68D836BCF',
            'power': 0,
            'progress': 0.0,
            'sortId': 7,
            'startDate': '2019-08-21 00:00:00',
            'taskCode': '',
            'text': '设计1新任务2',
            'type': '',
            'unscheduled': false,
            'viewPermission': [
                'AF50BEB72466D45F3B90405908EA7C314'
            ],
            'wbs': '1.2.1.7'
        }
    ],
    'links': [
        {
            'id': '1569545894466',
            'source': 'A7459B184F8CB4BD0997588BAC6D60BCA',
            'target': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'type': '0'
        },
        {
            'id': '1569545894484',
            'source': 'AB7A377B83C6541CAA6BDF25D5DA8443B',
            'target': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'type': '0'
        },
        {
            'id': '1569545694524',
            'source': 'AC0FD836039E94B7DA5CE3E62CDB7F350',
            'target': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'type': '0'
        },
        {
            'id': '1569545694525',
            'source': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'target': 'AC0FD836039E94B7DA5CE3E62CDB7F350',
            'type': '3'
        },
        {
            'id': '1569545694526',
            'source': 'AC0FD836039E94B7DA5CE3E62CDB7F350',
            'target': 'AD9B1D5BA94A74AF5B548F91FCA26D760',
            'type': '0'
        }
    ],
};

export default class List extends React.Component {
    componentDidMount() {
        this.findPathTask();
    }
    findPathTask=() => {
        const { data, links } = taskData;
        let pivotalPath = new PivotalPath({
            task: data,
            links,
            callback: (a, b) => {
                console.log(a, b, '返回值');
            }
        });
        console.log(pivotalPath, 'pivotalPath');
    };
    render() {
        return (
            <div>
                <Link to="/" >home</Link>
                <Link to="/list" >list</Link>
            </div>
        );
    }
}
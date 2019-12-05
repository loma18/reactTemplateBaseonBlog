//通用分页设置
export const hxPaginationSetup = {
	defaultPageSize: 10,
	pageSize: 10,
	showQuickJumper: true,
	showTotal: (total, range) => {
		return (
			<span>
				总共<span style={{ color: '#1890ff' }}>{total}</span>条
			</span>
		);
	}
};

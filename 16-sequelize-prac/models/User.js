

const User = (Sequelize, DataTypes)=>{

    
    const model = Sequelize.define(
        'user', //param1: 모델 이름 설정
        {
            //id int AI PK
            id:{
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            pw:{
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            name:{
                type: DataTypes.STRING(10),
                allowNull: false
            }
        }, //param2: 컬럼 정의
        {
            tableName:'user', //실제 DB테이블이름 명시
            freezeTableName: true, // 첫번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
            // 시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 가져가요

            // charset, collate 값이 있는데 db 정의할 때 한글 인코딩 가능하도록 만들어뒀기 때문에 따로 설정 필요 X

            timestamps: false, 
            // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함
        }//param3 : 모델 옵션 정의
    )
    return model;
}

module.exports = User;


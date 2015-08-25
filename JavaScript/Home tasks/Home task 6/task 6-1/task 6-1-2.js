//�������� �������
var obj = {
    className: 'my menu menu'
};

//�������� ������� ������ � �������� ������
function removeClass(obj, cls){

    //�������� ������� �������
    var arr = [];
    var newArr = [];

    //�������� � ������ ��������� ������ className �������
    arr = obj.className.split(" ");


    //�������� ����� �������� ��������� �������
    for (var i = 0; i < arr.length; i++) {

        //����� ����������� ���������������� ������� � �������
        if (arr[i] != cls) {

            //���������� ����������� ���������������� ������� � ����� ������
            newArr.push(arr[i]);
        }
    }

    //����������� ��������� ������ ������� � ������ className �������
    obj.className = newArr.join(" ");

    //������� �������� �������
    return (obj);
}

//����� ���������� � �������
console.log(removeClass(obj, 'menu')); // obj.className='menu'
console.log( obj.className ); // 'my'

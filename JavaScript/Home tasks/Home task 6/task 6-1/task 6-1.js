//�������� �������
var obj = {
    className: 'open menu'
};

//�������� ������� ������ � �������� ������
function removeClass(obj, cls){

    //�������� ������� �������
    var arr = [];

    //�������� � ������ ��������� ������ className �������
    arr = obj.className.split(" ");

    //�������� ����� �������� ��������� �������
    for (var i = 0; i < arr.length; i++) {

        //����� �������� �������� � �������
        if (arr[i] == cls) {

            //�������� �������� ��� ��� �������
            arr.splice(i,1);
        }
        //����������� ��������� ������� � ������ className �������
        obj.className = arr.join(" ");
    }

    //������� �������� �������
    return (obj);
}

//����� ���������� � �������
console.log(removeClass(obj, 'open')); // obj.className='menu'
//console.log(removeClass(obj, 'blabla')); // ��� ���������

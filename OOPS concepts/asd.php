<?php

abstract Class ParentAbstractClass{
    abstract public function getName(): string;
    abstract public function setName(string $value);
}

interface ParentClass{
    public function getName();
    public function setName();
}

Class Child1 extends ParentAbstractClass implements ParentClass  {
    public function getName(): string
    {
        return $this->name;
    }
    public function setName(string $value): self
    {
        echo $value;exit;
        $this->name = $value;
        return $this;
    }
}
$objChild1 = new Child1();
$objChild1->setName("dhruv");
$objChild1->getName();
?>
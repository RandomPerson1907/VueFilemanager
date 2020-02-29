<template>
    <div class="file">
        <div class="file__preview">
            <img src="../assets/file-types/pdf.png" alt="PDF">
        </div>
        <div class="file__info">
            <div class="file__info__name">Felecia Resume.pdf</div>
            <div class="file__info__size">12.85kb</div>
            <div class="file__info__last-accessed">Last accessed : 3 hours ago</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileComponent"
    }
</script>

<style lang="scss" scoped>
    .file {
        box-sizing: border-box;
        width: 100%;
        height: 180px;
        border-radius: .25rem;
        background-color: #F2F4F4;
        border: 1px solid #DFE3E7;
        overflow: hidden;
        cursor: pointer;
        transition: box-shadow .3s ease-in-out;

        &:hover {
            transform: scale(1.01);
            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);
        }

        * {
            box-sizing: border-box;
        }

        .file__preview {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 110px;
            border-bottom: 1px solid #DFE3E7;

            img {
                width: 30px;
                height: 38px;
            }
        }

        .file__info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 70px;
            padding: 10px 6px;
            background-color: #fff;

            * {
                width: 100%;
            }

            .file__info__name {
                font-size: 12.8px;
                font-weight: 500;
            }

            .file__info__size,
            .file__info__last-accessed {
                font-size: 10px;
                font-weight: 400;
                color: #828D99;
            }
        }
    }
</style>
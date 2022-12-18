# ドキュメント構造

## 雀士 (Players)

CollectionID/DocumentID : `pleyers/{uuid}`

| FieldName | Type   | Required? |
|-----------|--------|-----------|
| Name      | string | yes       |
| discordID | string | no        |

## 雀荘 (Jansous)

CollectionID/DocumentID : `jansous/{uuid}`

| FieldName | Type   | Required? |
|-----------|--------|-----------|
| Name      | string | yes       |

## 試合結果 - 四麻 (Yonmas)

CollectionID/DocumentID : `yonmas/{uuid}`

| FieldName     | Type     | Required? |
|---------------|----------|-----------|
| EastScore     | integer  | yes       |
| EastPlayerID  | string   | yes       |
| SouthScore    | integer  | yes       |
| SouthPlayerID | string   | yes       |
| WestScore     | integer  | yes       |
| WestPlayerID  | string   | yes       |
| NorthScore    | integer  | yes       |
| NorthPlayerID | string   | yes       |
| JansouID      | string   | yes       |
| CreatedAt     | datetime | yes       |

## 試合結果 - 三麻 (Sanmas)

CollectionID/DocumentID : `sanmas/{uuid}`

|   FieldName   | Type     | Required? |
|---------------|----------|-----------|
| EastScore     | integer  | yes       |
| EastPlayerID  | string   | yes       |
| SouthScore    | integer  | yes       |
| SouthPlayerID | string   | yes       |
| WestScore     | integer  | yes       |
| WestPlayerID  | string   | yes       |
| JansouID      | string   | yes       |
| CreatedAt     | datetime | yes       |

## 試合グループ (Matches)

CollectionID/DocumentID : `matches/{uuid}`

| FieldName | Type   | Required? |
|-----------|--------|-----------|
| Name      | string | yes       |

## 試合グループ-試合結果 (MatchResults)

CollectionID/DocumentID : `matches/{uuid}/results/{uuid}`

| FieldName     | Type    | Required? |
|---------------|---------|-----------|
| ResultPath    | string  | yes       |

- `ResultPath`には `yonmas/{uuid}` もしくは `sanmas/{uuid}` のようにパス情報が入る。

## 試合グループ-参加雀士 (MatchPlayers)

CollectionID/DocumentID : `matches/{uuid}/players/{uuid}`

Fields はなし。


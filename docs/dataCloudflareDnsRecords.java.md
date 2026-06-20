# `dataCloudflareDnsRecords` Submodule <a name="`dataCloudflareDnsRecords` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsRecords <a name="DataCloudflareDnsRecords" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records cloudflare_dns_records}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecords;

DataCloudflareDnsRecords.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .comment(DataCloudflareDnsRecordsComment)
//  .content(DataCloudflareDnsRecordsContent)
//  .direction(java.lang.String)
//  .match(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(DataCloudflareDnsRecordsName)
//  .order(java.lang.String)
//  .proxied(java.lang.Boolean|IResolvable)
//  .search(java.lang.String)
//  .tag(DataCloudflareDnsRecordsTag)
//  .tagMatch(java.lang.String)
//  .type(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.comment">comment</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.match">match</a></code> | <code>java.lang.String</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.proxied">proxied</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tag">tag</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tagMatch">tagMatch</a></code> | <code>java.lang.String</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Record type. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.comment"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.match"></a>

- *Type:* java.lang.String

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.proxied"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tag"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}.

---

##### `tagMatch`<sup>Optional</sup> <a name="tagMatch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.tagMatch"></a>

- *Type:* java.lang.String

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment">putComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch">resetTagMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putComment` <a name="putComment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment"></a>

```java
public void putComment(DataCloudflareDnsRecordsComment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

---

##### `putContent` <a name="putContent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent"></a>

```java
public void putContent(DataCloudflareDnsRecordsContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

---

##### `putName` <a name="putName" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName"></a>

```java
public void putName(DataCloudflareDnsRecordsName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

---

##### `putTag` <a name="putTag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag"></a>

```java
public void putTag(DataCloudflareDnsRecordsTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment"></a>

```java
public void resetComment()
```

##### `resetContent` <a name="resetContent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent"></a>

```java
public void resetContent()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMatch` <a name="resetMatch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetProxied` <a name="resetProxied" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied"></a>

```java
public void resetProxied()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag"></a>

```java
public void resetTag()
```

##### `resetTagMatch` <a name="resetTagMatch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch"></a>

```java
public void resetTagMatch()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType"></a>

```java
public void resetType()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsRecords resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecords;

DataCloudflareDnsRecords.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecords;

DataCloudflareDnsRecords.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecords;

DataCloudflareDnsRecords.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecords;

DataCloudflareDnsRecords.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareDnsRecords.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareDnsRecords resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareDnsRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareDnsRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content">content</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name">name</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput">commentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput">nameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput">proxiedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput">tagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput">tagMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied">proxied</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch">tagMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment"></a>

```java
public DataCloudflareDnsRecordsCommentOutputReference getComment();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content"></a>

```java
public DataCloudflareDnsRecordsContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name"></a>

```java
public DataCloudflareDnsRecordsNameOutputReference getName();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result"></a>

```java
public DataCloudflareDnsRecordsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag"></a>

```java
public DataCloudflareDnsRecordsTagOutputReference getTag();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput"></a>

```java
public IResolvable|DataCloudflareDnsRecordsComment getCommentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput"></a>

```java
public IResolvable|DataCloudflareDnsRecordsContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput"></a>

```java
public IResolvable|DataCloudflareDnsRecordsName getNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput"></a>

```java
public java.lang.Boolean|IResolvable getProxiedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput"></a>

```java
public IResolvable|DataCloudflareDnsRecordsTag getTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

---

##### `tagMatchInput`<sup>Optional</sup> <a name="tagMatchInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput"></a>

```java
public java.lang.String getTagMatchInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied"></a>

```java
public java.lang.Boolean|IResolvable getProxied();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `tagMatch`<sup>Required</sup> <a name="tagMatch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch"></a>

```java
public java.lang.String getTagMatch();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsRecordsComment <a name="DataCloudflareDnsRecordsComment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsComment;

DataCloudflareDnsRecordsComment.builder()
//  .absent(java.lang.String)
//  .contains(java.lang.String)
//  .endswith(java.lang.String)
//  .exact(java.lang.String)
//  .present(java.lang.String)
//  .startswith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent">absent</a></code> | <code>java.lang.String</code> | If this parameter is present, only records *without* a comment are returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains">contains</a></code> | <code>java.lang.String</code> | Substring of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith">endswith</a></code> | <code>java.lang.String</code> | Suffix of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact">exact</a></code> | <code>java.lang.String</code> | Exact value of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present">present</a></code> | <code>java.lang.String</code> | If this parameter is present, only records *with* a comment are returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith">startswith</a></code> | <code>java.lang.String</code> | Prefix of the DNS record comment. Comment filters are case-insensitive. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent"></a>

```java
public java.lang.String getAbsent();
```

- *Type:* java.lang.String

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present"></a>

```java
public java.lang.String getPresent();
```

- *Type:* java.lang.String

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsConfig <a name="DataCloudflareDnsRecordsConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsConfig;

DataCloudflareDnsRecordsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .comment(DataCloudflareDnsRecordsComment)
//  .content(DataCloudflareDnsRecordsContent)
//  .direction(java.lang.String)
//  .match(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(DataCloudflareDnsRecordsName)
//  .order(java.lang.String)
//  .proxied(java.lang.Boolean|IResolvable)
//  .search(java.lang.String)
//  .tag(DataCloudflareDnsRecordsTag)
//  .tagMatch(java.lang.String)
//  .type(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match">match</a></code> | <code>java.lang.String</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name">name</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied">proxied</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch">tagMatch</a></code> | <code>java.lang.String</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Record type. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment"></a>

```java
public DataCloudflareDnsRecordsComment getComment();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content"></a>

```java
public DataCloudflareDnsRecordsContent getContent();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name"></a>

```java
public DataCloudflareDnsRecordsName getName();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied"></a>

```java
public java.lang.Boolean|IResolvable getProxied();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag"></a>

```java
public DataCloudflareDnsRecordsTag getTag();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}.

---

##### `tagMatch`<sup>Optional</sup> <a name="tagMatch" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch"></a>

```java
public java.lang.String getTagMatch();
```

- *Type:* java.lang.String

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}

---

### DataCloudflareDnsRecordsContent <a name="DataCloudflareDnsRecordsContent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsContent;

DataCloudflareDnsRecordsContent.builder()
//  .contains(java.lang.String)
//  .endswith(java.lang.String)
//  .exact(java.lang.String)
//  .startswith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains">contains</a></code> | <code>java.lang.String</code> | Substring of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith">endswith</a></code> | <code>java.lang.String</code> | Suffix of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact">exact</a></code> | <code>java.lang.String</code> | Exact value of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith">startswith</a></code> | <code>java.lang.String</code> | Prefix of the DNS record content. Content filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsName <a name="DataCloudflareDnsRecordsName" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsName;

DataCloudflareDnsRecordsName.builder()
//  .contains(java.lang.String)
//  .endswith(java.lang.String)
//  .exact(java.lang.String)
//  .startswith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains">contains</a></code> | <code>java.lang.String</code> | Substring of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith">endswith</a></code> | <code>java.lang.String</code> | Suffix of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact">exact</a></code> | <code>java.lang.String</code> | Exact value of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith">startswith</a></code> | <code>java.lang.String</code> | Prefix of the DNS record name. Name filters are case-insensitive. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsResult <a name="DataCloudflareDnsRecordsResult" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResult;

DataCloudflareDnsRecordsResult.builder()
    .build();
```


### DataCloudflareDnsRecordsResultData <a name="DataCloudflareDnsRecordsResultData" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultData;

DataCloudflareDnsRecordsResultData.builder()
    .build();
```


### DataCloudflareDnsRecordsResultSettings <a name="DataCloudflareDnsRecordsResultSettings" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultSettings;

DataCloudflareDnsRecordsResultSettings.builder()
    .build();
```


### DataCloudflareDnsRecordsTag <a name="DataCloudflareDnsRecordsTag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsTag;

DataCloudflareDnsRecordsTag.builder()
//  .absent(java.lang.String)
//  .contains(java.lang.String)
//  .endswith(java.lang.String)
//  .exact(java.lang.String)
//  .present(java.lang.String)
//  .startswith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent">absent</a></code> | <code>java.lang.String</code> | Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains">contains</a></code> | <code>java.lang.String</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith">endswith</a></code> | <code>java.lang.String</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact">exact</a></code> | <code>java.lang.String</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present">present</a></code> | <code>java.lang.String</code> | Name of a tag which must be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith">startswith</a></code> | <code>java.lang.String</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |

---

##### `absent`<sup>Optional</sup> <a name="absent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent"></a>

```java
public java.lang.String getAbsent();
```

- *Type:* java.lang.String

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present"></a>

```java
public java.lang.String getPresent();
```

- *Type:* java.lang.String

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsRecordsCommentOutputReference <a name="DataCloudflareDnsRecordsCommentOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsCommentOutputReference;

new DataCloudflareDnsRecordsCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent">resetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsent` <a name="resetAbsent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent"></a>

```java
public void resetAbsent()
```

##### `resetContains` <a name="resetContains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith"></a>

```java
public void resetEndswith()
```

##### `resetExact` <a name="resetExact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetPresent` <a name="resetPresent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent"></a>

```java
public void resetPresent()
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith"></a>

```java
public void resetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput">absentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput">endswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput">presentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput">startswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent">absent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith">endswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present">present</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith">startswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absentInput`<sup>Optional</sup> <a name="absentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput"></a>

```java
public java.lang.String getAbsentInput();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput"></a>

```java
public java.lang.String getEndswithInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput"></a>

```java
public java.lang.String getPresentInput();
```

- *Type:* java.lang.String

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput"></a>

```java
public java.lang.String getStartswithInput();
```

- *Type:* java.lang.String

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent"></a>

```java
public java.lang.String getAbsent();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present"></a>

```java
public java.lang.String getPresent();
```

- *Type:* java.lang.String

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareDnsRecordsComment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

---


### DataCloudflareDnsRecordsContentOutputReference <a name="DataCloudflareDnsRecordsContentOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsContentOutputReference;

new DataCloudflareDnsRecordsContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith"></a>

```java
public void resetEndswith()
```

##### `resetExact` <a name="resetExact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith"></a>

```java
public void resetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput">endswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput">startswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith">endswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith">startswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput"></a>

```java
public java.lang.String getEndswithInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput"></a>

```java
public java.lang.String getStartswithInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareDnsRecordsContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

---


### DataCloudflareDnsRecordsNameOutputReference <a name="DataCloudflareDnsRecordsNameOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsNameOutputReference;

new DataCloudflareDnsRecordsNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith"></a>

```java
public void resetEndswith()
```

##### `resetExact` <a name="resetExact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith"></a>

```java
public void resetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput">endswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput">startswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith">endswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith">startswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput"></a>

```java
public java.lang.String getEndswithInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput"></a>

```java
public java.lang.String getStartswithInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareDnsRecordsName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

---


### DataCloudflareDnsRecordsResultDataOutputReference <a name="DataCloudflareDnsRecordsResultDataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultDataOutputReference;

new DataCloudflareDnsRecordsResultDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude">altitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType">digestType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags">flags</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees">latDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection">latDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes">latMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds">latSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees">longDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection">longDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes">longMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds">longSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType">matchingType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz">precisionHorz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert">precisionVert</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference">preference</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement">replacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector">selector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage">usage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude"></a>

```java
public java.lang.Number getAltitude();
```

- *Type:* java.lang.Number

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType"></a>

```java
public java.lang.Number getDigestType();
```

- *Type:* java.lang.Number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags"></a>

```java
public AnyMap getFlags();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

---

##### `latDegrees`<sup>Required</sup> <a name="latDegrees" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees"></a>

```java
public java.lang.Number getLatDegrees();
```

- *Type:* java.lang.Number

---

##### `latDirection`<sup>Required</sup> <a name="latDirection" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection"></a>

```java
public java.lang.String getLatDirection();
```

- *Type:* java.lang.String

---

##### `latMinutes`<sup>Required</sup> <a name="latMinutes" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes"></a>

```java
public java.lang.Number getLatMinutes();
```

- *Type:* java.lang.Number

---

##### `latSeconds`<sup>Required</sup> <a name="latSeconds" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds"></a>

```java
public java.lang.Number getLatSeconds();
```

- *Type:* java.lang.Number

---

##### `longDegrees`<sup>Required</sup> <a name="longDegrees" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees"></a>

```java
public java.lang.Number getLongDegrees();
```

- *Type:* java.lang.Number

---

##### `longDirection`<sup>Required</sup> <a name="longDirection" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection"></a>

```java
public java.lang.String getLongDirection();
```

- *Type:* java.lang.String

---

##### `longMinutes`<sup>Required</sup> <a name="longMinutes" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes"></a>

```java
public java.lang.Number getLongMinutes();
```

- *Type:* java.lang.Number

---

##### `longSeconds`<sup>Required</sup> <a name="longSeconds" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds"></a>

```java
public java.lang.Number getLongSeconds();
```

- *Type:* java.lang.Number

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType"></a>

```java
public java.lang.Number getMatchingType();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `precisionHorz`<sup>Required</sup> <a name="precisionHorz" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz"></a>

```java
public java.lang.Number getPrecisionHorz();
```

- *Type:* java.lang.Number

---

##### `precisionVert`<sup>Required</sup> <a name="precisionVert" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert"></a>

```java
public java.lang.Number getPrecisionVert();
```

- *Type:* java.lang.Number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference"></a>

```java
public java.lang.Number getPreference();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector"></a>

```java
public java.lang.Number getSelector();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage"></a>

```java
public java.lang.Number getUsage();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue"></a>

```java
public DataCloudflareDnsRecordsResultData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a>

---


### DataCloudflareDnsRecordsResultList <a name="DataCloudflareDnsRecordsResultList" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultList;

new DataCloudflareDnsRecordsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get"></a>

```java
public DataCloudflareDnsRecordsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareDnsRecordsResultOutputReference <a name="DataCloudflareDnsRecordsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultOutputReference;

new DataCloudflareDnsRecordsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn">commentModifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta">meta</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.privateRouting">privateRouting</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable">proxiable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied">proxied</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn">tagsModifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `commentModifiedOn`<sup>Required</sup> <a name="commentModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn"></a>

```java
public java.lang.String getCommentModifiedOn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data"></a>

```java
public DataCloudflareDnsRecordsResultDataOutputReference getData();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta"></a>

```java
public java.lang.String getMeta();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `privateRouting`<sup>Required</sup> <a name="privateRouting" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.privateRouting"></a>

```java
public IResolvable getPrivateRouting();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable"></a>

```java
public IResolvable getProxiable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied"></a>

```java
public IResolvable getProxied();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings"></a>

```java
public DataCloudflareDnsRecordsResultSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsModifiedOn`<sup>Required</sup> <a name="tagsModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn"></a>

```java
public java.lang.String getTagsModifiedOn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareDnsRecordsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a>

---


### DataCloudflareDnsRecordsResultSettingsOutputReference <a name="DataCloudflareDnsRecordsResultSettingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsResultSettingsOutputReference;

new DataCloudflareDnsRecordsResultSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname">flattenCname</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only">ipv4Only</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only">ipv6Only</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flattenCname`<sup>Required</sup> <a name="flattenCname" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname"></a>

```java
public IResolvable getFlattenCname();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipv4Only`<sup>Required</sup> <a name="ipv4Only" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only"></a>

```java
public IResolvable getIpv4Only();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipv6Only`<sup>Required</sup> <a name="ipv6Only" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only"></a>

```java
public IResolvable getIpv6Only();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue"></a>

```java
public DataCloudflareDnsRecordsResultSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a>

---


### DataCloudflareDnsRecordsTagOutputReference <a name="DataCloudflareDnsRecordsTagOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_dns_records.DataCloudflareDnsRecordsTagOutputReference;

new DataCloudflareDnsRecordsTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent">resetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsent` <a name="resetAbsent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent"></a>

```java
public void resetAbsent()
```

##### `resetContains` <a name="resetContains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith"></a>

```java
public void resetEndswith()
```

##### `resetExact` <a name="resetExact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetPresent` <a name="resetPresent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent"></a>

```java
public void resetPresent()
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith"></a>

```java
public void resetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput">absentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput">endswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput">presentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput">startswithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent">absent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith">endswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present">present</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith">startswith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absentInput`<sup>Optional</sup> <a name="absentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput"></a>

```java
public java.lang.String getAbsentInput();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput"></a>

```java
public java.lang.String getEndswithInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput"></a>

```java
public java.lang.String getPresentInput();
```

- *Type:* java.lang.String

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput"></a>

```java
public java.lang.String getStartswithInput();
```

- *Type:* java.lang.String

---

##### `absent`<sup>Required</sup> <a name="absent" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent"></a>

```java
public java.lang.String getAbsent();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith"></a>

```java
public java.lang.String getEndswith();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present"></a>

```java
public java.lang.String getPresent();
```

- *Type:* java.lang.String

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith"></a>

```java
public java.lang.String getStartswith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareDnsRecordsTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

---




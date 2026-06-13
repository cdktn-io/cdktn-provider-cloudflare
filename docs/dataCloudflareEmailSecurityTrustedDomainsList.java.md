# `dataCloudflareEmailSecurityTrustedDomainsList` Submodule <a name="`dataCloudflareEmailSecurityTrustedDomainsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityTrustedDomainsList <a name="DataCloudflareEmailSecurityTrustedDomainsList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list cloudflare_email_security_trusted_domains_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsList;

DataCloudflareEmailSecurityTrustedDomainsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .isRecent(java.lang.Boolean|IResolvable)
//  .isSimilarity(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .pattern(java.lang.String)
//  .search(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.isRecent">isRecent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.isSimilarity">isSimilarity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#account_id DataCloudflareEmailSecurityTrustedDomainsList#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#direction DataCloudflareEmailSecurityTrustedDomainsList#direction}

---

##### `isRecent`<sup>Optional</sup> <a name="isRecent" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.isRecent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#is_recent DataCloudflareEmailSecurityTrustedDomainsList#is_recent}

---

##### `isSimilarity`<sup>Optional</sup> <a name="isSimilarity" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.isSimilarity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#is_similarity DataCloudflareEmailSecurityTrustedDomainsList#is_similarity}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#max_items DataCloudflareEmailSecurityTrustedDomainsList#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#order DataCloudflareEmailSecurityTrustedDomainsList#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#search DataCloudflareEmailSecurityTrustedDomainsList#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsRecent">resetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsSimilarity">resetIsSimilarity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetIsRecent` <a name="resetIsRecent" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsRecent"></a>

```java
public void resetIsRecent()
```

##### `resetIsSimilarity` <a name="resetIsSimilarity" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsSimilarity"></a>

```java
public void resetIsSimilarity()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetSearch"></a>

```java
public void resetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityTrustedDomainsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsList;

DataCloudflareEmailSecurityTrustedDomainsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsList;

DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsList;

DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsList;

DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityTrustedDomainsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomainsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareEmailSecurityTrustedDomainsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomainsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList">DataCloudflareEmailSecurityTrustedDomainsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecentInput">isRecentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarityInput">isSimilarityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecent">isRecent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarity">isSimilarity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.result"></a>

```java
public DataCloudflareEmailSecurityTrustedDomainsListResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList">DataCloudflareEmailSecurityTrustedDomainsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `isRecentInput`<sup>Optional</sup> <a name="isRecentInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecentInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRecentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSimilarityInput`<sup>Optional</sup> <a name="isSimilarityInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarityInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSimilarityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecent"></a>

```java
public java.lang.Boolean|IResolvable getIsRecent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarity"></a>

```java
public java.lang.Boolean|IResolvable getIsSimilarity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityTrustedDomainsListConfig <a name="DataCloudflareEmailSecurityTrustedDomainsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsListConfig;

DataCloudflareEmailSecurityTrustedDomainsListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .isRecent(java.lang.Boolean|IResolvable)
//  .isSimilarity(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .pattern(java.lang.String)
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isRecent">isRecent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isSimilarity">isSimilarity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#account_id DataCloudflareEmailSecurityTrustedDomainsList#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#direction DataCloudflareEmailSecurityTrustedDomainsList#direction}

---

##### `isRecent`<sup>Optional</sup> <a name="isRecent" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isRecent"></a>

```java
public java.lang.Boolean|IResolvable getIsRecent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#is_recent DataCloudflareEmailSecurityTrustedDomainsList#is_recent}

---

##### `isSimilarity`<sup>Optional</sup> <a name="isSimilarity" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isSimilarity"></a>

```java
public java.lang.Boolean|IResolvable getIsSimilarity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#is_similarity DataCloudflareEmailSecurityTrustedDomainsList#is_similarity}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#max_items DataCloudflareEmailSecurityTrustedDomainsList#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#order DataCloudflareEmailSecurityTrustedDomainsList#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/email_security_trusted_domains_list#search DataCloudflareEmailSecurityTrustedDomainsList#search}

---

### DataCloudflareEmailSecurityTrustedDomainsListResult <a name="DataCloudflareEmailSecurityTrustedDomainsListResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsListResult;

DataCloudflareEmailSecurityTrustedDomainsListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityTrustedDomainsListResultList <a name="DataCloudflareEmailSecurityTrustedDomainsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsListResultList;

new DataCloudflareEmailSecurityTrustedDomainsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get"></a>

```java
public DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference <a name="DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_trusted_domains_list.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference;

new DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.comments">comments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRecent">isRecent</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRegex">isRegex</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isSimilarity">isSimilarity</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult">DataCloudflareEmailSecurityTrustedDomainsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRecent"></a>

```java
public IResolvable getIsRecent();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRegex"></a>

```java
public IResolvable getIsRegex();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isSimilarity"></a>

```java
public IResolvable getIsSimilarity();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityTrustedDomainsListResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult">DataCloudflareEmailSecurityTrustedDomainsListResult</a>

---




# `dataCloudflareSchemaValidationSchemasList` Submodule <a name="`dataCloudflareSchemaValidationSchemasList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemasList <a name="DataCloudflareSchemaValidationSchemasList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasList;

DataCloudflareSchemaValidationSchemasList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .maxItems(java.lang.Number)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .validationEnabled(java.lang.Boolean|IResolvable)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter for enabled schemas. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.omitSource"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.validationEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource">resetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled">resetValidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOmitSource` <a name="resetOmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource"></a>

```java
public void resetOmitSource()
```

##### `resetValidationEnabled` <a name="resetValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled"></a>

```java
public void resetValidationEnabled()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasList;

DataCloudflareSchemaValidationSchemasList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasList;

DataCloudflareSchemaValidationSchemasList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasList;

DataCloudflareSchemaValidationSchemasList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasList;

DataCloudflareSchemaValidationSchemasList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareSchemaValidationSchemasList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput">omitSourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput">validationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result"></a>

```java
public DataCloudflareSchemaValidationSchemasListResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `omitSourceInput`<sup>Optional</sup> <a name="omitSourceInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput"></a>

```java
public java.lang.Boolean|IResolvable getOmitSourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationEnabledInput`<sup>Optional</sup> <a name="validationEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `omitSource`<sup>Required</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasListConfig <a name="DataCloudflareSchemaValidationSchemasListConfig" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasListConfig;

DataCloudflareSchemaValidationSchemasListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .maxItems(java.lang.Number)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .validationEnabled(java.lang.Boolean|IResolvable)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter for enabled schemas. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}

---

### DataCloudflareSchemaValidationSchemasListResult <a name="DataCloudflareSchemaValidationSchemasListResult" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasListResult;

DataCloudflareSchemaValidationSchemasListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasListResultList <a name="DataCloudflareSchemaValidationSchemasListResultList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasListResultList;

new DataCloudflareSchemaValidationSchemasListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get"></a>

```java
public DataCloudflareSchemaValidationSchemasListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareSchemaValidationSchemasListResultOutputReference <a name="DataCloudflareSchemaValidationSchemasListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas_list.DataCloudflareSchemaValidationSchemasListResultOutputReference;

new DataCloudflareSchemaValidationSchemasListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled">validationEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled"></a>

```java
public IResolvable getValidationEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareSchemaValidationSchemasListResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a>

---




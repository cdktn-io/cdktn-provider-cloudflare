# `dataCloudflareSchemaValidationSchemas` Submodule <a name="`dataCloudflareSchemaValidationSchemas` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemas <a name="DataCloudflareSchemaValidationSchemas" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemas;

DataCloudflareSchemaValidationSchemas.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(DataCloudflareSchemaValidationSchemasFilter)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .schemaId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.schemaId">schemaId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}.

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.omitSource"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.schemaId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOmitSource">resetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter"></a>

```java
public void putFilter(DataCloudflareSchemaValidationSchemasFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetOmitSource` <a name="resetOmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOmitSource"></a>

```java
public void resetOmitSource()
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetSchemaId"></a>

```java
public void resetSchemaId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemas;

DataCloudflareSchemaValidationSchemas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemas;

DataCloudflareSchemaValidationSchemas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemas;

DataCloudflareSchemaValidationSchemas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemas;

DataCloudflareSchemaValidationSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareSchemaValidationSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareSchemaValidationSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference">DataCloudflareSchemaValidationSchemasFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.validationEnabled">validationEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSourceInput">omitSourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaIdInput">schemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filter"></a>

```java
public DataCloudflareSchemaValidationSchemasFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference">DataCloudflareSchemaValidationSchemasFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.validationEnabled"></a>

```java
public IResolvable getValidationEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filterInput"></a>

```java
public IResolvable|DataCloudflareSchemaValidationSchemasFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

---

##### `omitSourceInput`<sup>Optional</sup> <a name="omitSourceInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSourceInput"></a>

```java
public java.lang.Boolean|IResolvable getOmitSourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaIdInput"></a>

```java
public java.lang.String getSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `omitSource`<sup>Required</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasConfig <a name="DataCloudflareSchemaValidationSchemasConfig" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemasConfig;

DataCloudflareSchemaValidationSchemasConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(DataCloudflareSchemaValidationSchemasFilter)
//  .omitSource(java.lang.Boolean|IResolvable)
//  .schemaId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.omitSource">omitSource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.filter"></a>

```java
public DataCloudflareSchemaValidationSchemasFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}.

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.omitSource"></a>

```java
public java.lang.Boolean|IResolvable getOmitSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}

---

### DataCloudflareSchemaValidationSchemasFilter <a name="DataCloudflareSchemaValidationSchemasFilter" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemasFilter;

DataCloudflareSchemaValidationSchemasFilter.builder()
//  .validationEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter for enabled schemas. |

---

##### `validationEnabled`<sup>Optional</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/schema_validation_schemas#validation_enabled DataCloudflareSchemaValidationSchemas#validation_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasFilterOutputReference <a name="DataCloudflareSchemaValidationSchemasFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_schema_validation_schemas.DataCloudflareSchemaValidationSchemasFilterOutputReference;

new DataCloudflareSchemaValidationSchemasFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetValidationEnabled">resetValidationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidationEnabled` <a name="resetValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetValidationEnabled"></a>

```java
public void resetValidationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabledInput">validationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabled">validationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `validationEnabledInput`<sup>Optional</sup> <a name="validationEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getValidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareSchemaValidationSchemasFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

---




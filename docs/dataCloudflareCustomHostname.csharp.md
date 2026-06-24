# `dataCloudflareCustomHostname` Submodule <a name="`dataCloudflareCustomHostname` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomHostname <a name="DataCloudflareCustomHostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostname(Construct Scope, string Id, DataCloudflareCustomHostnameConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig">DataCloudflareCustomHostnameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig">DataCloudflareCustomHostnameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetCustomHostnameId">ResetCustomHostnameId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareCustomHostnameFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---

##### `ResetCustomHostnameId` <a name="ResetCustomHostnameId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetCustomHostnameId"></a>

```csharp
private void ResetCustomHostnameId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCustomHostname resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCustomHostname.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCustomHostname.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCustomHostname.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCustomHostname.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareCustomHostname resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCustomHostname to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customMetadata">CustomMetadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginServer">CustomOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginSni">CustomOriginSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference">DataCloudflareCustomHostnameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerification">OwnershipVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference">DataCloudflareCustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerificationHttp">OwnershipVerificationHttp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ssl">Ssl</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference">DataCloudflareCustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.verificationErrors">VerificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameIdInput">CustomHostnameIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameId">CustomHostnameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customMetadata"></a>

```csharp
public StringMap CustomMetadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CustomOriginServer`<sup>Required</sup> <a name="CustomOriginServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginServer"></a>

```csharp
public string CustomOriginServer { get; }
```

- *Type:* string

---

##### `CustomOriginSni`<sup>Required</sup> <a name="CustomOriginSni" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customOriginSni"></a>

```csharp
public string CustomOriginSni { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filter"></a>

```csharp
public DataCloudflareCustomHostnameFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference">DataCloudflareCustomHostnameFilterOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnershipVerification`<sup>Required</sup> <a name="OwnershipVerification" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerification"></a>

```csharp
public DataCloudflareCustomHostnameOwnershipVerificationOutputReference OwnershipVerification { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference">DataCloudflareCustomHostnameOwnershipVerificationOutputReference</a>

---

##### `OwnershipVerificationHttp`<sup>Required</sup> <a name="OwnershipVerificationHttp" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ownershipVerificationHttp"></a>

```csharp
public DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference OwnershipVerificationHttp { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.ssl"></a>

```csharp
public DataCloudflareCustomHostnameSslOutputReference Ssl { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference">DataCloudflareCustomHostnameSslOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VerificationErrors`<sup>Required</sup> <a name="VerificationErrors" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.verificationErrors"></a>

```csharp
public string[] VerificationErrors { get; }
```

- *Type:* string[]

---

##### `CustomHostnameIdInput`<sup>Optional</sup> <a name="CustomHostnameIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameIdInput"></a>

```csharp
public string CustomHostnameIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareCustomHostnameFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CustomHostnameId`<sup>Required</sup> <a name="CustomHostnameId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.customHostnameId"></a>

```csharp
public string CustomHostnameId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostname.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomHostnameConfig <a name="DataCloudflareCustomHostnameConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomHostnameId = null,
    DataCloudflareCustomHostnameFilter Filter = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.customHostnameId">CustomHostnameId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomHostnameId`<sup>Optional</sup> <a name="CustomHostnameId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.customHostnameId"></a>

```csharp
public string CustomHostnameId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#custom_hostname_id DataCloudflareCustomHostname#custom_hostname_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.filter"></a>

```csharp
public DataCloudflareCustomHostnameFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#zone_id DataCloudflareCustomHostname#zone_id}

---

### DataCloudflareCustomHostnameFilter <a name="DataCloudflareCustomHostnameFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameFilter {
    string CertificateAuthority = null,
    string CustomOriginServer = null,
    string Direction = null,
    DataCloudflareCustomHostnameFilterHostname Hostname = null,
    string HostnameStatus = null,
    string Id = null,
    string Order = null,
    double Ssl = null,
    string SslStatus = null,
    bool|IResolvable Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | Filter by the certificate authority that issued the SSL certificate. Available values: "google", "lets_encrypt", "ssl_com". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.customOriginServer">CustomOriginServer</a></code> | <code>string</code> | Filter by custom origin server name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.direction">Direction</a></code> | <code>string</code> | Direction to order hostnames. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostname">Hostname</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#hostname DataCloudflareCustomHostname#hostname}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostnameStatus">HostnameStatus</a></code> | <code>string</code> | Filter by the hostname's activation status. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.id">Id</a></code> | <code>string</code> | Hostname ID to match against. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.order">Order</a></code> | <code>string</code> | Field to order hostnames by. Available values: "ssl", "ssl_status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.ssl">Ssl</a></code> | <code>double</code> | Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.sslStatus">SslStatus</a></code> | <code>string</code> | Filter by SSL certificate status. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.wildcard">Wildcard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter by whether the custom hostname is a wildcard hostname. |

---

##### `CertificateAuthority`<sup>Optional</sup> <a name="CertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; set; }
```

- *Type:* string

Filter by the certificate authority that issued the SSL certificate. Available values: "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#certificate_authority DataCloudflareCustomHostname#certificate_authority}

---

##### `CustomOriginServer`<sup>Optional</sup> <a name="CustomOriginServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.customOriginServer"></a>

```csharp
public string CustomOriginServer { get; set; }
```

- *Type:* string

Filter by custom origin server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#custom_origin_server DataCloudflareCustomHostname#custom_origin_server}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to order hostnames. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#direction DataCloudflareCustomHostname#direction}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostname"></a>

```csharp
public DataCloudflareCustomHostnameFilterHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#hostname DataCloudflareCustomHostname#hostname}.

---

##### `HostnameStatus`<sup>Optional</sup> <a name="HostnameStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.hostnameStatus"></a>

```csharp
public string HostnameStatus { get; set; }
```

- *Type:* string

Filter by the hostname's activation status.

Available values: "active", "pending", "active_redeploying", "moved", "pending_deletion", "deleted", "pending_blocked", "pending_migration", "pending_provisioned", "test_pending", "test_active", "test_active_apex", "test_blocked", "test_failed", "provisioned", "blocked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#hostname_status DataCloudflareCustomHostname#hostname_status}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#id DataCloudflareCustomHostname#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order hostnames by. Available values: "ssl", "ssl_status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#order DataCloudflareCustomHostname#order}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.ssl"></a>

```csharp
public double Ssl { get; set; }
```

- *Type:* double

Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#ssl DataCloudflareCustomHostname#ssl}

---

##### `SslStatus`<sup>Optional</sup> <a name="SslStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.sslStatus"></a>

```csharp
public string SslStatus { get; set; }
```

- *Type:* string

Filter by SSL certificate status.

Available values: "initializing", "pending_validation", "deleted", "pending_issuance", "pending_deployment", "pending_deletion", "pending_expiration", "expired", "active", "initializing_timed_out", "validation_timed_out", "issuance_timed_out", "deployment_timed_out", "deletion_timed_out", "pending_cleanup", "staging_deployment", "staging_active", "deactivating", "inactive", "backup_issued", "holding_deployment".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#ssl_status DataCloudflareCustomHostname#ssl_status}

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter.property.wildcard"></a>

```csharp
public bool|IResolvable Wildcard { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter by whether the custom hostname is a wildcard hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#wildcard DataCloudflareCustomHostname#wildcard}

---

### DataCloudflareCustomHostnameFilterHostname <a name="DataCloudflareCustomHostnameFilterHostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameFilterHostname {
    string Contain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname.property.contain">Contain</a></code> | <code>string</code> | Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter. |

---

##### `Contain`<sup>Optional</sup> <a name="Contain" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname.property.contain"></a>

```csharp
public string Contain { get; set; }
```

- *Type:* string

Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#contain DataCloudflareCustomHostname#contain}

---

### DataCloudflareCustomHostnameOwnershipVerification <a name="DataCloudflareCustomHostnameOwnershipVerification" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameOwnershipVerification {

};
```


### DataCloudflareCustomHostnameOwnershipVerificationHttp <a name="DataCloudflareCustomHostnameOwnershipVerificationHttp" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameOwnershipVerificationHttp {

};
```


### DataCloudflareCustomHostnameSsl <a name="DataCloudflareCustomHostnameSsl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSsl {

};
```


### DataCloudflareCustomHostnameSslDcvDelegationRecords <a name="DataCloudflareCustomHostnameSslDcvDelegationRecords" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslDcvDelegationRecords {

};
```


### DataCloudflareCustomHostnameSslSettings <a name="DataCloudflareCustomHostnameSslSettings" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslSettings {

};
```


### DataCloudflareCustomHostnameSslValidationErrors <a name="DataCloudflareCustomHostnameSslValidationErrors" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationErrors {

};
```


### DataCloudflareCustomHostnameSslValidationRecords <a name="DataCloudflareCustomHostnameSslValidationRecords" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationRecords {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomHostnameFilterHostnameOutputReference <a name="DataCloudflareCustomHostnameFilterHostnameOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameFilterHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.resetContain">ResetContain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContain` <a name="ResetContain" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.resetContain"></a>

```csharp
private void ResetContain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.containInput">ContainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.contain">Contain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainInput`<sup>Optional</sup> <a name="ContainInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.containInput"></a>

```csharp
public string ContainInput { get; }
```

- *Type:* string

---

##### `Contain`<sup>Required</sup> <a name="Contain" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.contain"></a>

```csharp
public string Contain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareCustomHostnameFilterHostname InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a>

---


### DataCloudflareCustomHostnameFilterOutputReference <a name="DataCloudflareCustomHostnameFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetCertificateAuthority">ResetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetCustomOriginServer">ResetCustomOriginServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostnameStatus">ResetHostnameStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSslStatus">ResetSslStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostname` <a name="PutHostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.putHostname"></a>

```csharp
private void PutHostname(DataCloudflareCustomHostnameFilterHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a>

---

##### `ResetCertificateAuthority` <a name="ResetCertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetCertificateAuthority"></a>

```csharp
private void ResetCertificateAuthority()
```

##### `ResetCustomOriginServer` <a name="ResetCustomOriginServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetCustomOriginServer"></a>

```csharp
private void ResetCustomOriginServer()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetHostnameStatus` <a name="ResetHostnameStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetHostnameStatus"></a>

```csharp
private void ResetHostnameStatus()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetSslStatus` <a name="ResetSslStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetSslStatus"></a>

```csharp
private void ResetSslStatus()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference">DataCloudflareCustomHostnameFilterHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.customOriginServerInput">CustomOriginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameStatusInput">HostnameStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslInput">SslInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslStatusInput">SslStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.customOriginServer">CustomOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameStatus">HostnameStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.ssl">Ssl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslStatus">SslStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.wildcard">Wildcard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostname"></a>

```csharp
public DataCloudflareCustomHostnameFilterHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostnameOutputReference">DataCloudflareCustomHostnameFilterHostnameOutputReference</a>

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.certificateAuthorityInput"></a>

```csharp
public string CertificateAuthorityInput { get; }
```

- *Type:* string

---

##### `CustomOriginServerInput`<sup>Optional</sup> <a name="CustomOriginServerInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.customOriginServerInput"></a>

```csharp
public string CustomOriginServerInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameInput"></a>

```csharp
public IResolvable|DataCloudflareCustomHostnameFilterHostname HostnameInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterHostname">DataCloudflareCustomHostnameFilterHostname</a>

---

##### `HostnameStatusInput`<sup>Optional</sup> <a name="HostnameStatusInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameStatusInput"></a>

```csharp
public string HostnameStatusInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslInput"></a>

```csharp
public double SslInput { get; }
```

- *Type:* double

---

##### `SslStatusInput`<sup>Optional</sup> <a name="SslStatusInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslStatusInput"></a>

```csharp
public string SslStatusInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.wildcardInput"></a>

```csharp
public bool|IResolvable WildcardInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; }
```

- *Type:* string

---

##### `CustomOriginServer`<sup>Required</sup> <a name="CustomOriginServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.customOriginServer"></a>

```csharp
public string CustomOriginServer { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `HostnameStatus`<sup>Required</sup> <a name="HostnameStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.hostnameStatus"></a>

```csharp
public string HostnameStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.ssl"></a>

```csharp
public double Ssl { get; }
```

- *Type:* double

---

##### `SslStatus`<sup>Required</sup> <a name="SslStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.sslStatus"></a>

```csharp
public string SslStatus { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.wildcard"></a>

```csharp
public bool|IResolvable Wildcard { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareCustomHostnameFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameFilter">DataCloudflareCustomHostnameFilter</a>

---


### DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference <a name="DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">HttpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp">DataCloudflareCustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```csharp
public string HttpBody { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameOwnershipVerificationHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationHttp">DataCloudflareCustomHostnameOwnershipVerificationHttp</a>

---


### DataCloudflareCustomHostnameOwnershipVerificationOutputReference <a name="DataCloudflareCustomHostnameOwnershipVerificationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameOwnershipVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification">DataCloudflareCustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameOwnershipVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameOwnershipVerification">DataCloudflareCustomHostnameOwnershipVerification</a>

---


### DataCloudflareCustomHostnameSslDcvDelegationRecordsList <a name="DataCloudflareCustomHostnameSslDcvDelegationRecordsList" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslDcvDelegationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.get"></a>

```csharp
private DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference <a name="DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.cnameTarget">CnameTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.emails">Emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.httpBody">HttpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.txtName">TxtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.txtValue">TxtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecords">DataCloudflareCustomHostnameSslDcvDelegationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `CnameTarget`<sup>Required</sup> <a name="CnameTarget" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.cnameTarget"></a>

```csharp
public string CnameTarget { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.emails"></a>

```csharp
public string[] Emails { get; }
```

- *Type:* string[]

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.httpBody"></a>

```csharp
public string HttpBody { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TxtName`<sup>Required</sup> <a name="TxtName" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.txtName"></a>

```csharp
public string TxtName { get; }
```

- *Type:* string

---

##### `TxtValue`<sup>Required</sup> <a name="TxtValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.txtValue"></a>

```csharp
public string TxtValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameSslDcvDelegationRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecords">DataCloudflareCustomHostnameSslDcvDelegationRecords</a>

---


### DataCloudflareCustomHostnameSslOutputReference <a name="DataCloudflareCustomHostnameSslOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.bundleMethod">BundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCsrId">CustomCsrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customKey">CustomKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.dcvDelegationRecords">DcvDelegationRecords</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList">DataCloudflareCustomHostnameSslDcvDelegationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference">DataCloudflareCustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.uploadedOn">UploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationErrors">ValidationErrors</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList">DataCloudflareCustomHostnameSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationRecords">ValidationRecords</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList">DataCloudflareCustomHostnameSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.wildcard">Wildcard</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl">DataCloudflareCustomHostnameSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleMethod`<sup>Required</sup> <a name="BundleMethod" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.bundleMethod"></a>

```csharp
public string BundleMethod { get; }
```

- *Type:* string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; }
```

- *Type:* string

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; }
```

- *Type:* string

---

##### `CustomCsrId`<sup>Required</sup> <a name="CustomCsrId" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customCsrId"></a>

```csharp
public string CustomCsrId { get; }
```

- *Type:* string

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.customKey"></a>

```csharp
public string CustomKey { get; }
```

- *Type:* string

---

##### `DcvDelegationRecords`<sup>Required</sup> <a name="DcvDelegationRecords" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.dcvDelegationRecords"></a>

```csharp
public DataCloudflareCustomHostnameSslDcvDelegationRecordsList DcvDelegationRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslDcvDelegationRecordsList">DataCloudflareCustomHostnameSslDcvDelegationRecordsList</a>

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.settings"></a>

```csharp
public DataCloudflareCustomHostnameSslSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference">DataCloudflareCustomHostnameSslSettingsOutputReference</a>

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.uploadedOn"></a>

```csharp
public string UploadedOn { get; }
```

- *Type:* string

---

##### `ValidationErrors`<sup>Required</sup> <a name="ValidationErrors" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationErrors"></a>

```csharp
public DataCloudflareCustomHostnameSslValidationErrorsList ValidationErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList">DataCloudflareCustomHostnameSslValidationErrorsList</a>

---

##### `ValidationRecords`<sup>Required</sup> <a name="ValidationRecords" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.validationRecords"></a>

```csharp
public DataCloudflareCustomHostnameSslValidationRecordsList ValidationRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList">DataCloudflareCustomHostnameSslValidationRecordsList</a>

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.wildcard"></a>

```csharp
public IResolvable Wildcard { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameSsl InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSsl">DataCloudflareCustomHostnameSsl</a>

---


### DataCloudflareCustomHostnameSslSettingsOutputReference <a name="DataCloudflareCustomHostnameSslSettingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.http2">Http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.tls13">Tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings">DataCloudflareCustomHostnameSslSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```csharp
public string[] Ciphers { get; }
```

- *Type:* string[]

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```csharp
public string EarlyHints { get; }
```

- *Type:* string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.http2"></a>

```csharp
public string Http2 { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.tls13"></a>

```csharp
public string Tls13 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameSslSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslSettings">DataCloudflareCustomHostnameSslSettings</a>

---


### DataCloudflareCustomHostnameSslValidationErrorsList <a name="DataCloudflareCustomHostnameSslValidationErrorsList" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get"></a>

```csharp
private DataCloudflareCustomHostnameSslValidationErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareCustomHostnameSslValidationErrorsOutputReference <a name="DataCloudflareCustomHostnameSslValidationErrorsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors">DataCloudflareCustomHostnameSslValidationErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrorsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameSslValidationErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationErrors">DataCloudflareCustomHostnameSslValidationErrors</a>

---


### DataCloudflareCustomHostnameSslValidationRecordsList <a name="DataCloudflareCustomHostnameSslValidationRecordsList" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get"></a>

```csharp
private DataCloudflareCustomHostnameSslValidationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareCustomHostnameSslValidationRecordsOutputReference <a name="DataCloudflareCustomHostnameSslValidationRecordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCustomHostnameSslValidationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.cnameTarget">CnameTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.emails">Emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpBody">HttpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtName">TxtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtValue">TxtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords">DataCloudflareCustomHostnameSslValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `CnameTarget`<sup>Required</sup> <a name="CnameTarget" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.cnameTarget"></a>

```csharp
public string CnameTarget { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.emails"></a>

```csharp
public string[] Emails { get; }
```

- *Type:* string[]

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpBody"></a>

```csharp
public string HttpBody { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TxtName`<sup>Required</sup> <a name="TxtName" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtName"></a>

```csharp
public string TxtName { get; }
```

- *Type:* string

---

##### `TxtValue`<sup>Required</sup> <a name="TxtValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.txtValue"></a>

```csharp
public string TxtValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecordsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareCustomHostnameSslValidationRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomHostname.DataCloudflareCustomHostnameSslValidationRecords">DataCloudflareCustomHostnameSslValidationRecords</a>

---




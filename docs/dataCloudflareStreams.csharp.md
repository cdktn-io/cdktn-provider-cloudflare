# `dataCloudflareStreams` Submodule <a name="`dataCloudflareStreams` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreams <a name="DataCloudflareStreams" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams cloudflare_streams}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreams(Construct Scope, string Id, DataCloudflareStreamsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig">DataCloudflareStreamsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig">DataCloudflareStreamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAfter">ResetAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAsc">ResetAsc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetBefore">ResetBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetCreator">ResetCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetIncludeCounts">ResetIncludeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetLiveInputId">ResetLiveInputId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetVideoName">ResetVideoName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAfter` <a name="ResetAfter" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAfter"></a>

```csharp
private void ResetAfter()
```

##### `ResetAsc` <a name="ResetAsc" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAsc"></a>

```csharp
private void ResetAsc()
```

##### `ResetBefore` <a name="ResetBefore" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetBefore"></a>

```csharp
private void ResetBefore()
```

##### `ResetCreator` <a name="ResetCreator" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetCreator"></a>

```csharp
private void ResetCreator()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeCounts` <a name="ResetIncludeCounts" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetIncludeCounts"></a>

```csharp
private void ResetIncludeCounts()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetLiveInputId` <a name="ResetLiveInputId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetLiveInputId"></a>

```csharp
private void ResetLiveInputId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStart"></a>

```csharp
private void ResetStart()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVideoName` <a name="ResetVideoName" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetVideoName"></a>

```csharp
private void ResetVideoName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareStreams resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareStreams.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareStreams.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareStreams.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareStreams.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareStreams resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareStreams to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList">DataCloudflareStreamsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.afterInput">AfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.ascInput">AscInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.beforeInput">BeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creatorInput">CreatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCountsInput">IncludeCountsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.liveInputIdInput">LiveInputIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoNameInput">VideoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.after">After</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.asc">Asc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.before">Before</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCounts">IncludeCounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.liveInputId">LiveInputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoName">VideoName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.result"></a>

```csharp
public DataCloudflareStreamsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList">DataCloudflareStreamsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AfterInput`<sup>Optional</sup> <a name="AfterInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.afterInput"></a>

```csharp
public string AfterInput { get; }
```

- *Type:* string

---

##### `AscInput`<sup>Optional</sup> <a name="AscInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.ascInput"></a>

```csharp
public bool|IResolvable AscInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BeforeInput`<sup>Optional</sup> <a name="BeforeInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.beforeInput"></a>

```csharp
public string BeforeInput { get; }
```

- *Type:* string

---

##### `CreatorInput`<sup>Optional</sup> <a name="CreatorInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creatorInput"></a>

```csharp
public string CreatorInput { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeCountsInput`<sup>Optional</sup> <a name="IncludeCountsInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCountsInput"></a>

```csharp
public bool|IResolvable IncludeCountsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `LiveInputIdInput`<sup>Optional</sup> <a name="LiveInputIdInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.liveInputIdInput"></a>

```csharp
public string LiveInputIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VideoNameInput`<sup>Optional</sup> <a name="VideoNameInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoNameInput"></a>

```csharp
public string VideoNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `After`<sup>Required</sup> <a name="After" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.after"></a>

```csharp
public string After { get; }
```

- *Type:* string

---

##### `Asc`<sup>Required</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.asc"></a>

```csharp
public bool|IResolvable Asc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Before`<sup>Required</sup> <a name="Before" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.before"></a>

```csharp
public string Before { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeCounts`<sup>Required</sup> <a name="IncludeCounts" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCounts"></a>

```csharp
public bool|IResolvable IncludeCounts { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LiveInputId`<sup>Required</sup> <a name="LiveInputId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.liveInputId"></a>

```csharp
public string LiveInputId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VideoName`<sup>Required</sup> <a name="VideoName" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoName"></a>

```csharp
public string VideoName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamsConfig <a name="DataCloudflareStreamsConfig" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    string After = null,
    bool|IResolvable Asc = null,
    string Before = null,
    string Creator = null,
    string End = null,
    string Id = null,
    bool|IResolvable IncludeCounts = null,
    double Limit = null,
    string LiveInputId = null,
    double MaxItems = null,
    string Name = null,
    string Search = null,
    string Start = null,
    string Status = null,
    string Type = null,
    string VideoName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.after">After</a></code> | <code>string</code> | Alias for 'start'. Returns videos created after this date/time (RFC 3339 format). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.asc">Asc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Lists videos in ascending order of creation. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.before">Before</a></code> | <code>string</code> | Alias for 'end'. Returns videos created before this date/time (RFC 3339 format). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.creator">Creator</a></code> | <code>string</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.end">End</a></code> | <code>string</code> | Lists videos created before the specified date. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.id">Id</a></code> | <code>string</code> | Filter by video ID(s). Can be a single ID or a comma-separated list of IDs. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.includeCounts">IncludeCounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Includes the total number of videos associated with the submitted query parameters. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.limit">Limit</a></code> | <code>double</code> | Maximum number of videos to return (default 1000, max 1000). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.liveInputId">LiveInputId</a></code> | <code>string</code> | Filter by live input ID to find videos associated with a specific live stream. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.name">Name</a></code> | <code>string</code> | Filter by video name/UID(s). Can be a single name or a comma-separated list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.search">Search</a></code> | <code>string</code> | Provides a partial word match of the `name` key in the `meta` field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.start">Start</a></code> | <code>string</code> | Lists videos created after the specified date. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.status">Status</a></code> | <code>string</code> | Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.type">Type</a></code> | <code>string</code> | Specifies whether the video is `vod` or `live`. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.videoName">VideoName</a></code> | <code>string</code> | Provides a fast, exact string match on the `name` key in the `meta` field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#account_id DataCloudflareStreams#account_id}

---

##### `After`<sup>Optional</sup> <a name="After" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.after"></a>

```csharp
public string After { get; set; }
```

- *Type:* string

Alias for 'start'. Returns videos created after this date/time (RFC 3339 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#after DataCloudflareStreams#after}

---

##### `Asc`<sup>Optional</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.asc"></a>

```csharp
public bool|IResolvable Asc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Lists videos in ascending order of creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#asc DataCloudflareStreams#asc}

---

##### `Before`<sup>Optional</sup> <a name="Before" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.before"></a>

```csharp
public string Before { get; set; }
```

- *Type:* string

Alias for 'end'. Returns videos created before this date/time (RFC 3339 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#before DataCloudflareStreams#before}

---

##### `Creator`<sup>Optional</sup> <a name="Creator" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.creator"></a>

```csharp
public string Creator { get; set; }
```

- *Type:* string

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#creator DataCloudflareStreams#creator}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Lists videos created before the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#end DataCloudflareStreams#end}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Filter by video ID(s). Can be a single ID or a comma-separated list of IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#id DataCloudflareStreams#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCounts`<sup>Optional</sup> <a name="IncludeCounts" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.includeCounts"></a>

```csharp
public bool|IResolvable IncludeCounts { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Includes the total number of videos associated with the submitted query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#include_counts DataCloudflareStreams#include_counts}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Maximum number of videos to return (default 1000, max 1000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#limit DataCloudflareStreams#limit}

---

##### `LiveInputId`<sup>Optional</sup> <a name="LiveInputId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.liveInputId"></a>

```csharp
public string LiveInputId { get; set; }
```

- *Type:* string

Filter by live input ID to find videos associated with a specific live stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#live_input_id DataCloudflareStreams#live_input_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#max_items DataCloudflareStreams#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by video name/UID(s). Can be a single name or a comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#name DataCloudflareStreams#name}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Provides a partial word match of the `name` key in the `meta` field.

Slow for medium to large video libraries. May be unavailable for very large libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#search DataCloudflareStreams#search}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Lists videos created after the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#start DataCloudflareStreams#start}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#status DataCloudflareStreams#status}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies whether the video is `vod` or `live`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#type DataCloudflareStreams#type}

---

##### `VideoName`<sup>Optional</sup> <a name="VideoName" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.videoName"></a>

```csharp
public string VideoName { get; set; }
```

- *Type:* string

Provides a fast, exact string match on the `name` key in the `meta` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/streams#video_name DataCloudflareStreams#video_name}

---

### DataCloudflareStreamsResult <a name="DataCloudflareStreamsResult" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResult {

};
```


### DataCloudflareStreamsResultInput <a name="DataCloudflareStreamsResultInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultInput {

};
```


### DataCloudflareStreamsResultPlayback <a name="DataCloudflareStreamsResultPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultPlayback {

};
```


### DataCloudflareStreamsResultPublicDetails <a name="DataCloudflareStreamsResultPublicDetails" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultPublicDetails {

};
```


### DataCloudflareStreamsResultStatus <a name="DataCloudflareStreamsResultStatus" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultStatus {

};
```


### DataCloudflareStreamsResultWatermark <a name="DataCloudflareStreamsResultWatermark" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultWatermark {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareStreamsResultInputOutputReference <a name="DataCloudflareStreamsResultInputOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput">DataCloudflareStreamsResultInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResultInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput">DataCloudflareStreamsResultInput</a>

---


### DataCloudflareStreamsResultList <a name="DataCloudflareStreamsResultList" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get"></a>

```csharp
private DataCloudflareStreamsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareStreamsResultOutputReference <a name="DataCloudflareStreamsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.clippedFrom">ClippedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference">DataCloudflareStreamsResultInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.liveInput">LiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxDurationSeconds">MaxDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxSizeBytes">MaxSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.meta">Meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.playback">Playback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference">DataCloudflareStreamsResultPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.preview">Preview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.publicDetails">PublicDetails</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference">DataCloudflareStreamsResultPublicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStream">ReadyToStream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStreamAt">ReadyToStreamAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.scheduledDeletion">ScheduledDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference">DataCloudflareStreamsResultStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnail">Thumbnail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnailTimestampPct">ThumbnailTimestampPct</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploaded">Uploaded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploadExpiry">UploadExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.watermark">Watermark</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference">DataCloudflareStreamsResultWatermarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult">DataCloudflareStreamsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ClippedFrom`<sup>Required</sup> <a name="ClippedFrom" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.clippedFrom"></a>

```csharp
public string ClippedFrom { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.input"></a>

```csharp
public DataCloudflareStreamsResultInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference">DataCloudflareStreamsResultInputOutputReference</a>

---

##### `LiveInput`<sup>Required</sup> <a name="LiveInput" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.liveInput"></a>

```csharp
public string LiveInput { get; }
```

- *Type:* string

---

##### `MaxDurationSeconds`<sup>Required</sup> <a name="MaxDurationSeconds" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxDurationSeconds"></a>

```csharp
public double MaxDurationSeconds { get; }
```

- *Type:* double

---

##### `MaxSizeBytes`<sup>Required</sup> <a name="MaxSizeBytes" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxSizeBytes"></a>

```csharp
public double MaxSizeBytes { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.meta"></a>

```csharp
public string Meta { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Playback`<sup>Required</sup> <a name="Playback" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.playback"></a>

```csharp
public DataCloudflareStreamsResultPlaybackOutputReference Playback { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference">DataCloudflareStreamsResultPlaybackOutputReference</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.preview"></a>

```csharp
public string Preview { get; }
```

- *Type:* string

---

##### `PublicDetails`<sup>Required</sup> <a name="PublicDetails" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.publicDetails"></a>

```csharp
public DataCloudflareStreamsResultPublicDetailsOutputReference PublicDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference">DataCloudflareStreamsResultPublicDetailsOutputReference</a>

---

##### `ReadyToStream`<sup>Required</sup> <a name="ReadyToStream" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStream"></a>

```csharp
public IResolvable ReadyToStream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReadyToStreamAt`<sup>Required</sup> <a name="ReadyToStreamAt" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStreamAt"></a>

```csharp
public string ReadyToStreamAt { get; }
```

- *Type:* string

---

##### `RequireSignedUrls`<sup>Required</sup> <a name="RequireSignedUrls" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.requireSignedUrls"></a>

```csharp
public IResolvable RequireSignedUrls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ScheduledDeletion`<sup>Required</sup> <a name="ScheduledDeletion" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.scheduledDeletion"></a>

```csharp
public string ScheduledDeletion { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.status"></a>

```csharp
public DataCloudflareStreamsResultStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference">DataCloudflareStreamsResultStatusOutputReference</a>

---

##### `Thumbnail`<sup>Required</sup> <a name="Thumbnail" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnail"></a>

```csharp
public string Thumbnail { get; }
```

- *Type:* string

---

##### `ThumbnailTimestampPct`<sup>Required</sup> <a name="ThumbnailTimestampPct" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnailTimestampPct"></a>

```csharp
public double ThumbnailTimestampPct { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Uploaded`<sup>Required</sup> <a name="Uploaded" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploaded"></a>

```csharp
public string Uploaded { get; }
```

- *Type:* string

---

##### `UploadExpiry`<sup>Required</sup> <a name="UploadExpiry" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploadExpiry"></a>

```csharp
public string UploadExpiry { get; }
```

- *Type:* string

---

##### `Watermark`<sup>Required</sup> <a name="Watermark" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.watermark"></a>

```csharp
public DataCloudflareStreamsResultWatermarkOutputReference Watermark { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference">DataCloudflareStreamsResultWatermarkOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult">DataCloudflareStreamsResult</a>

---


### DataCloudflareStreamsResultPlaybackOutputReference <a name="DataCloudflareStreamsResultPlaybackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultPlaybackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.dash">Dash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.hls">Hls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback">DataCloudflareStreamsResultPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dash`<sup>Required</sup> <a name="Dash" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.dash"></a>

```csharp
public string Dash { get; }
```

- *Type:* string

---

##### `Hls`<sup>Required</sup> <a name="Hls" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.hls"></a>

```csharp
public string Hls { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResultPlayback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback">DataCloudflareStreamsResultPlayback</a>

---


### DataCloudflareStreamsResultPublicDetailsOutputReference <a name="DataCloudflareStreamsResultPublicDetailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultPublicDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.channelLink">ChannelLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.mediaId">MediaId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.shareLink">ShareLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetails">DataCloudflareStreamsResultPublicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelLink`<sup>Required</sup> <a name="ChannelLink" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.channelLink"></a>

```csharp
public string ChannelLink { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `MediaId`<sup>Required</sup> <a name="MediaId" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.mediaId"></a>

```csharp
public double MediaId { get; }
```

- *Type:* double

---

##### `ShareLink`<sup>Required</sup> <a name="ShareLink" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.shareLink"></a>

```csharp
public string ShareLink { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetailsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResultPublicDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPublicDetails">DataCloudflareStreamsResultPublicDetails</a>

---


### DataCloudflareStreamsResultStatusOutputReference <a name="DataCloudflareStreamsResultStatusOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonCode">ErrorReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonText">ErrorReasonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.pctComplete">PctComplete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus">DataCloudflareStreamsResultStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorReasonCode`<sup>Required</sup> <a name="ErrorReasonCode" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonCode"></a>

```csharp
public string ErrorReasonCode { get; }
```

- *Type:* string

---

##### `ErrorReasonText`<sup>Required</sup> <a name="ErrorReasonText" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonText"></a>

```csharp
public string ErrorReasonText { get; }
```

- *Type:* string

---

##### `PctComplete`<sup>Required</sup> <a name="PctComplete" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.pctComplete"></a>

```csharp
public string PctComplete { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResultStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus">DataCloudflareStreamsResultStatus</a>

---


### DataCloudflareStreamsResultWatermarkOutputReference <a name="DataCloudflareStreamsResultWatermarkOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareStreamsResultWatermarkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.downloadedFrom">DownloadedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.opacity">Opacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.padding">Padding</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark">DataCloudflareStreamsResultWatermark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `DownloadedFrom`<sup>Required</sup> <a name="DownloadedFrom" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.downloadedFrom"></a>

```csharp
public string DownloadedFrom { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Opacity`<sup>Required</sup> <a name="Opacity" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.opacity"></a>

```csharp
public double Opacity { get; }
```

- *Type:* double

---

##### `Padding`<sup>Required</sup> <a name="Padding" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.padding"></a>

```csharp
public double Padding { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamsResultWatermark InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark">DataCloudflareStreamsResultWatermark</a>

---




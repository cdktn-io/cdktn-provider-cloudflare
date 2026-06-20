# `dataCloudflareAiSearchInstance` Submodule <a name="`dataCloudflareAiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchInstance <a name="DataCloudflareAiSearchInstance" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstance(Construct Scope, string Id, DataCloudflareAiSearchInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig">DataCloudflareAiSearchInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig">DataCloudflareAiSearchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareAiSearchInstanceFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSearchInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSearchInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSearchInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSearchInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAiSearchInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId">AiGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel">AisearchModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache">Cache</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold">CacheThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheTtl">CacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize">ChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel">EmbeddingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable">Enable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.engineVersion">EngineVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod">FusionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.indexingOptions">IndexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference">DataCloudflareAiSearchInstanceIndexingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.indexMethod">IndexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference">DataCloudflareAiSearchInstanceIndexMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity">LastActivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults">MaxNumResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused">Paused</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId">PublicEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking">Reranking</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel">RerankingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions">RetrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel">RewriteModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery">RewriteQuery</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold">ScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.syncInterval">SyncInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId">TokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AiGatewayId`<sup>Required</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId"></a>

```csharp
public string AiGatewayId { get; }
```

- *Type:* string

---

##### `AisearchModel`<sup>Required</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel"></a>

```csharp
public string AisearchModel { get; }
```

- *Type:* string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache"></a>

```csharp
public IResolvable Cache { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheThreshold`<sup>Required</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold"></a>

```csharp
public string CacheThreshold { get; }
```

- *Type:* string

---

##### `CacheTtl`<sup>Required</sup> <a name="CacheTtl" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheTtl"></a>

```csharp
public double CacheTtl { get; }
```

- *Type:* double

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; }
```

- *Type:* double

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize"></a>

```csharp
public double ChunkSize { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata"></a>

```csharp
public DataCloudflareAiSearchInstanceCustomMetadataList CustomMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a>

---

##### `EmbeddingModel`<sup>Required</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel"></a>

```csharp
public string EmbeddingModel { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.engineVersion"></a>

```csharp
public double EngineVersion { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter"></a>

```csharp
public DataCloudflareAiSearchInstanceFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a>

---

##### `FusionMethod`<sup>Required</sup> <a name="FusionMethod" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod"></a>

```csharp
public string FusionMethod { get; }
```

- *Type:* string

---

##### `HybridSearchEnabled`<sup>Required</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled"></a>

```csharp
public IResolvable HybridSearchEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IndexingOptions`<sup>Required</sup> <a name="IndexingOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.indexingOptions"></a>

```csharp
public DataCloudflareAiSearchInstanceIndexingOptionsOutputReference IndexingOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference">DataCloudflareAiSearchInstanceIndexingOptionsOutputReference</a>

---

##### `IndexMethod`<sup>Required</sup> <a name="IndexMethod" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.indexMethod"></a>

```csharp
public DataCloudflareAiSearchInstanceIndexMethodOutputReference IndexMethod { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference">DataCloudflareAiSearchInstanceIndexMethodOutputReference</a>

---

##### `LastActivity`<sup>Required</sup> <a name="LastActivity" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity"></a>

```csharp
public string LastActivity { get; }
```

- *Type:* string

---

##### `MaxNumResults`<sup>Required</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults"></a>

```csharp
public double MaxNumResults { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata"></a>

```csharp
public DataCloudflareAiSearchInstanceMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused"></a>

```csharp
public IResolvable Paused { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId"></a>

```csharp
public string PublicEndpointId { get; }
```

- *Type:* string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference PublicEndpointParams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `Reranking`<sup>Required</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking"></a>

```csharp
public IResolvable Reranking { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RerankingModel`<sup>Required</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel"></a>

```csharp
public string RerankingModel { get; }
```

- *Type:* string

---

##### `RetrievalOptions`<sup>Required</sup> <a name="RetrievalOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions"></a>

```csharp
public DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference RetrievalOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `RewriteModel`<sup>Required</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel"></a>

```csharp
public string RewriteModel { get; }
```

- *Type:* string

---

##### `RewriteQuery`<sup>Required</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery"></a>

```csharp
public IResolvable RewriteQuery { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold"></a>

```csharp
public double ScoreThreshold { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceParams`<sup>Required</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsOutputReference SourceParams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SyncInterval`<sup>Required</sup> <a name="SyncInterval" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.syncInterval"></a>

```csharp
public double SyncInterval { get; }
```

- *Type:* double

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId"></a>

```csharp
public string TokenId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareAiSearchInstanceFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchInstanceConfig <a name="DataCloudflareAiSearchInstanceConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    DataCloudflareAiSearchInstanceFilter Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter"></a>

```csharp
public DataCloudflareAiSearchInstanceFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareAiSearchInstanceCustomMetadata <a name="DataCloudflareAiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceCustomMetadata {

};
```


### DataCloudflareAiSearchInstanceFilter <a name="DataCloudflareAiSearchInstanceFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceFilter {
    string Namespace = null,
    string OrderBy = null,
    string OrderByDirection = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.namespace">Namespace</a></code> | <code>string</code> | Filter by namespace. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.orderBy">OrderBy</a></code> | <code>string</code> | Field to order results by. Available values: "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.orderByDirection">OrderByDirection</a></code> | <code>string</code> | Order direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search">Search</a></code> | <code>string</code> | Filter instances whose id contains this string (case-insensitive). |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Filter by namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#namespace DataCloudflareAiSearchInstance#namespace}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Field to order results by. Available values: "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#order_by DataCloudflareAiSearchInstance#order_by}

---

##### `OrderByDirection`<sup>Optional</sup> <a name="OrderByDirection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.orderByDirection"></a>

```csharp
public string OrderByDirection { get; set; }
```

- *Type:* string

Order direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#order_by_direction DataCloudflareAiSearchInstance#order_by_direction}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Filter instances whose id contains this string (case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}

---

### DataCloudflareAiSearchInstanceIndexingOptions <a name="DataCloudflareAiSearchInstanceIndexingOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceIndexingOptions {

};
```


### DataCloudflareAiSearchInstanceIndexMethod <a name="DataCloudflareAiSearchInstanceIndexMethod" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceIndexMethod {

};
```


### DataCloudflareAiSearchInstanceMetadata <a name="DataCloudflareAiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceMetadata {

};
```


### DataCloudflareAiSearchInstancePublicEndpointParams <a name="DataCloudflareAiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParams {

};
```


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {

};
```


### DataCloudflareAiSearchInstancePublicEndpointParamsMcp <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsMcp {

};
```


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit {

};
```


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint {

};
```


### DataCloudflareAiSearchInstanceRetrievalOptions <a name="DataCloudflareAiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceRetrievalOptions {

};
```


### DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy <a name="DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy {

};
```


### DataCloudflareAiSearchInstanceSourceParams <a name="DataCloudflareAiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParams {

};
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawler <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawler {

};
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions {

};
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions {

};
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {

};
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchInstanceCustomMetadataList <a name="DataCloudflareAiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceCustomMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get"></a>

```csharp
private DataCloudflareAiSearchInstanceCustomMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAiSearchInstanceCustomMetadataOutputReference <a name="DataCloudflareAiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceCustomMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceCustomMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a>

---


### DataCloudflareAiSearchInstanceFilterOutputReference <a name="DataCloudflareAiSearchInstanceFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetOrderByDirection">ResetOrderByDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetOrderByDirection` <a name="ResetOrderByDirection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetOrderByDirection"></a>

```csharp
private void ResetOrderByDirection()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByDirectionInput">OrderByDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByDirection">OrderByDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrderByDirectionInput`<sup>Optional</sup> <a name="OrderByDirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByDirectionInput"></a>

```csharp
public string OrderByDirectionInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `OrderByDirection`<sup>Required</sup> <a name="OrderByDirection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.orderByDirection"></a>

```csharp
public string OrderByDirection { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareAiSearchInstanceFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---


### DataCloudflareAiSearchInstanceIndexingOptionsOutputReference <a name="DataCloudflareAiSearchInstanceIndexingOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceIndexingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer">KeywordTokenizer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptions">DataCloudflareAiSearchInstanceIndexingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeywordTokenizer`<sup>Required</sup> <a name="KeywordTokenizer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer"></a>

```csharp
public string KeywordTokenizer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceIndexingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexingOptions">DataCloudflareAiSearchInstanceIndexingOptions</a>

---


### DataCloudflareAiSearchInstanceIndexMethodOutputReference <a name="DataCloudflareAiSearchInstanceIndexMethodOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceIndexMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.keyword">Keyword</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.vector">Vector</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethod">DataCloudflareAiSearchInstanceIndexMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.keyword"></a>

```csharp
public IResolvable Keyword { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Vector`<sup>Required</sup> <a name="Vector" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.vector"></a>

```csharp
public IResolvable Vector { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethodOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceIndexMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceIndexMethod">DataCloudflareAiSearchInstanceIndexMethod</a>

---


### DataCloudflareAiSearchInstanceMetadataOutputReference <a name="DataCloudflareAiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain">WorkerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedFromAisearchWizard`<sup>Required</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```csharp
public IResolvable CreatedFromAisearchWizard { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WorkerDomain`<sup>Required</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```csharp
public string WorkerDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsMcp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```csharp
public string[] AuthorizedHosts { get; }
```

- *Type:* string[]

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference ChatCompletionsEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference Mcp { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference RateLimit { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference SearchEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```csharp
public double PeriodMs { get; }
```

- *Type:* double

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```csharp
public double Requests { get; }
```

- *Type:* double

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```csharp
public string Technique { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList <a name="DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.get"></a>

```csharp
private DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference <a name="DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy">DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy">DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy</a>

---


### DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference <a name="DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.boostBy">BoostBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList">DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">KeywordMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoostBy`<sup>Required</sup> <a name="BoostBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.boostBy"></a>

```csharp
public DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList BoostBy { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList">DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList</a>

---

##### `KeywordMatchMode`<sup>Required</sup> <a name="KeywordMatchMode" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```csharp
public string KeywordMatchMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceRetrievalOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems">ExcludeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems">IncludeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeItems`<sup>Required</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```csharp
public string[] ExcludeItems { get; }
```

- *Type:* string[]

---

##### `IncludeItems`<sup>Required</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```csharp
public string[] IncludeItems { get; }
```

- *Type:* string[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; }
```

- *Type:* string

---

##### `WebCrawler`<sup>Required</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference WebCrawler { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth">Depth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks">IncludeExternalLinks</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Depth`<sup>Required</sup> <a name="Depth" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth"></a>

```csharp
public double Depth { get; }
```

- *Type:* double

---

##### `IncludeExternalLinks`<sup>Required</sup> <a name="IncludeExternalLinks" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks"></a>

```csharp
public IResolvable IncludeExternalLinks { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains"></a>

```csharp
public IResolvable IncludeSubdomains { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions">CrawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">ParseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlOptions`<sup>Required</sup> <a name="CrawlOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference CrawlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a>

---

##### `ParseOptions`<sup>Required</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference ParseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `ParseType`<sup>Required</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```csharp
public string ParseType { get; }
```

- *Type:* string

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference StoreOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawler InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get"></a>

```csharp
private DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector">ContentSelector</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">IncludeHeaders</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">IncludeImages</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">SpecificSitemaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentSelector`<sup>Required</sup> <a name="ContentSelector" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList ContentSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a>

---

##### `IncludeHeaders`<sup>Required</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```csharp
public StringMap IncludeHeaders { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IncludeImages`<sup>Required</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```csharp
public IResolvable IncludeImages { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SpecificSitemaps`<sup>Required</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```csharp
public string[] SpecificSitemaps { get; }
```

- *Type:* string[]

---

##### `UseBrowserRendering`<sup>Required</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```csharp
public IResolvable UseBrowserRendering { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">StorageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; }
```

- *Type:* string

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```csharp
public string StorageId { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---




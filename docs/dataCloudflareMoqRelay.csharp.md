# `dataCloudflareMoqRelay` Submodule <a name="`dataCloudflareMoqRelay` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMoqRelay <a name="DataCloudflareMoqRelay" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay cloudflare_moq_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelay(Construct Scope, string Id, DataCloudflareMoqRelayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig">DataCloudflareMoqRelayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig">DataCloudflareMoqRelayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetRelayId">ResetRelayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareMoqRelayFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRelayId` <a name="ResetRelayId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.resetRelayId"></a>

```csharp
private void ResetRelayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMoqRelay resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMoqRelay.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMoqRelay.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMoqRelay.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMoqRelay.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareMoqRelay resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMoqRelay to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMoqRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMoqRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference">DataCloudflareMoqRelayConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference">DataCloudflareMoqRelayFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.relayIdInput">RelayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.relayId">RelayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.config"></a>

```csharp
public DataCloudflareMoqRelayConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference">DataCloudflareMoqRelayConfigAOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.filter"></a>

```csharp
public DataCloudflareMoqRelayFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference">DataCloudflareMoqRelayFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareMoqRelayFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a>

---

##### `RelayIdInput`<sup>Optional</sup> <a name="RelayIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.relayIdInput"></a>

```csharp
public string RelayIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RelayId`<sup>Required</sup> <a name="RelayId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.relayId"></a>

```csharp
public string RelayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelay.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMoqRelayConfig <a name="DataCloudflareMoqRelayConfig" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareMoqRelayFilter Filter = null,
    string RelayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#filter DataCloudflareMoqRelay#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.relayId">RelayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#relay_id DataCloudflareMoqRelay#relay_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#account_id DataCloudflareMoqRelay#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.filter"></a>

```csharp
public DataCloudflareMoqRelayFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#filter DataCloudflareMoqRelay#filter}.

---

##### `RelayId`<sup>Optional</sup> <a name="RelayId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfig.property.relayId"></a>

```csharp
public string RelayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#relay_id DataCloudflareMoqRelay#relay_id}.

---

### DataCloudflareMoqRelayConfigA <a name="DataCloudflareMoqRelayConfigA" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigA {

};
```


### DataCloudflareMoqRelayConfigLingeringSubscribe <a name="DataCloudflareMoqRelayConfigLingeringSubscribe" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigLingeringSubscribe {

};
```


### DataCloudflareMoqRelayConfigUpstreams <a name="DataCloudflareMoqRelayConfigUpstreams" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigUpstreams {

};
```


### DataCloudflareMoqRelayConfigUpstreamsUpstreams <a name="DataCloudflareMoqRelayConfigUpstreamsUpstreams" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigUpstreamsUpstreams {

};
```


### DataCloudflareMoqRelayFilter <a name="DataCloudflareMoqRelayFilter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayFilter {
    bool|IResolvable Asc = null,
    string CreatedAfter = null,
    string CreatedBefore = null,
    double PerPage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.asc">Asc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.perPage">PerPage</a></code> | <code>double</code> | Maximum number of relays to return per page. |

---

##### `Asc`<sup>Optional</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.asc"></a>

```csharp
public bool|IResolvable Asc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#asc DataCloudflareMoqRelay#asc}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

Cursor for pagination.

Returns relays created strictly after this
RFC 3339 timestamp (typically the `created` value of the last item
on the current page, to fetch the next page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#created_after DataCloudflareMoqRelay#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Cursor for pagination.

Returns relays created strictly before this
RFC 3339 timestamp (typically the `created` value of the first item
on the current page, to fetch the previous page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#created_before DataCloudflareMoqRelay#created_before}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter.property.perPage"></a>

```csharp
public double PerPage { get; set; }
```

- *Type:* double

Maximum number of relays to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relay#per_page DataCloudflareMoqRelay#per_page}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMoqRelayConfigAOutputReference <a name="DataCloudflareMoqRelayConfigAOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.lingeringSubscribe">LingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference">DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference">DataCloudflareMoqRelayConfigUpstreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigA">DataCloudflareMoqRelayConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LingeringSubscribe`<sup>Required</sup> <a name="LingeringSubscribe" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.lingeringSubscribe"></a>

```csharp
public DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference LingeringSubscribe { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference">DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference</a>

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.upstreams"></a>

```csharp
public DataCloudflareMoqRelayConfigUpstreamsOutputReference Upstreams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference">DataCloudflareMoqRelayConfigUpstreamsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigAOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMoqRelayConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigA">DataCloudflareMoqRelayConfigA</a>

---


### DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference <a name="DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs">MaxTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribe">DataCloudflareMoqRelayConfigLingeringSubscribe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxTimeoutMs`<sup>Required</sup> <a name="MaxTimeoutMs" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs"></a>

```csharp
public double MaxTimeoutMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMoqRelayConfigLingeringSubscribe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigLingeringSubscribe">DataCloudflareMoqRelayConfigLingeringSubscribe</a>

---


### DataCloudflareMoqRelayConfigUpstreamsOutputReference <a name="DataCloudflareMoqRelayConfigUpstreamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList">DataCloudflareMoqRelayConfigUpstreamsUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreams">DataCloudflareMoqRelayConfigUpstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.upstreams"></a>

```csharp
public DataCloudflareMoqRelayConfigUpstreamsUpstreamsList Upstreams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList">DataCloudflareMoqRelayConfigUpstreamsUpstreamsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMoqRelayConfigUpstreams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreams">DataCloudflareMoqRelayConfigUpstreams</a>

---


### DataCloudflareMoqRelayConfigUpstreamsUpstreamsList <a name="DataCloudflareMoqRelayConfigUpstreamsUpstreamsList" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigUpstreamsUpstreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.get"></a>

```csharp
private DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference <a name="DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreams">DataCloudflareMoqRelayConfigUpstreamsUpstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMoqRelayConfigUpstreamsUpstreams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayConfigUpstreamsUpstreams">DataCloudflareMoqRelayConfigUpstreamsUpstreams</a>

---


### DataCloudflareMoqRelayFilterOutputReference <a name="DataCloudflareMoqRelayFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMoqRelayFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetAsc">ResetAsc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetPerPage">ResetPerPage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAsc` <a name="ResetAsc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetAsc"></a>

```csharp
private void ResetAsc()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.resetPerPage"></a>

```csharp
private void ResetPerPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.ascInput">AscInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.perPageInput">PerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.asc">Asc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AscInput`<sup>Optional</sup> <a name="AscInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.ascInput"></a>

```csharp
public bool|IResolvable AscInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.perPageInput"></a>

```csharp
public double PerPageInput { get; }
```

- *Type:* double

---

##### `Asc`<sup>Required</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.asc"></a>

```csharp
public bool|IResolvable Asc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareMoqRelayFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelay.DataCloudflareMoqRelayFilter">DataCloudflareMoqRelayFilter</a>

---




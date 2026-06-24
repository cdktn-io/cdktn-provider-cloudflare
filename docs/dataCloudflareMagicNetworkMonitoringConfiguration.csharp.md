# `dataCloudflareMagicNetworkMonitoringConfiguration` Submodule <a name="`dataCloudflareMagicNetworkMonitoringConfiguration` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringConfiguration <a name="DataCloudflareMagicNetworkMonitoringConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringConfiguration(Construct Scope, string Id, DataCloudflareMagicNetworkMonitoringConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig">DataCloudflareMagicNetworkMonitoringConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig">DataCloudflareMagicNetworkMonitoringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicNetworkMonitoringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling">DefaultSampling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps">RouterIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices">WarpDevices</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultSampling`<sup>Required</sup> <a name="DefaultSampling" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling"></a>

```csharp
public double DefaultSampling { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RouterIps`<sup>Required</sup> <a name="RouterIps" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps"></a>

```csharp
public string[] RouterIps { get; }
```

- *Type:* string[]

---

##### `WarpDevices`<sup>Required</sup> <a name="WarpDevices" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices"></a>

```csharp
public DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList WarpDevices { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationConfig <a name="DataCloudflareMagicNetworkMonitoringConfigurationConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}.

---

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get"></a>

```csharp
private DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp">RouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RouterIp`<sup>Required</sup> <a name="RouterIp" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp"></a>

```csharp
public string RouterIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a>

---




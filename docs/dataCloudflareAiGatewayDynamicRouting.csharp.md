# `dataCloudflareAiGatewayDynamicRouting` Submodule <a name="`dataCloudflareAiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiGatewayDynamicRouting <a name="DataCloudflareAiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRouting(Construct Scope, string Id, DataCloudflareAiGatewayDynamicRoutingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig">DataCloudflareAiGatewayDynamicRoutingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig">DataCloudflareAiGatewayDynamicRoutingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiGatewayDynamicRouting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiGatewayDynamicRouting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiGatewayDynamicRouting.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiGatewayDynamicRouting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAiGatewayDynamicRouting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference">DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList">DataCloudflareAiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.version">Version</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference">DataCloudflareAiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.deployment"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference">DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.elements"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsList Elements { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList">DataCloudflareAiGatewayDynamicRoutingElementsList</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.version"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingVersionOutputReference Version { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference">DataCloudflareAiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiGatewayDynamicRoutingConfig <a name="DataCloudflareAiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayId,
    string Id,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}.

---

### DataCloudflareAiGatewayDynamicRoutingDeployment <a name="DataCloudflareAiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingDeployment {

};
```


### DataCloudflareAiGatewayDynamicRoutingElements <a name="DataCloudflareAiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElements {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputs <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputs {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue {

};
```


### DataCloudflareAiGatewayDynamicRoutingElementsProperties <a name="DataCloudflareAiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsProperties {

};
```


### DataCloudflareAiGatewayDynamicRoutingVersion <a name="DataCloudflareAiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingVersion {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment">DataCloudflareAiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment">DataCloudflareAiGatewayDynamicRoutingDeployment</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsList <a name="DataCloudflareAiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get"></a>

```csharp
private DataCloudflareAiGatewayDynamicRoutingElementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements">DataCloudflareAiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements">DataCloudflareAiGatewayDynamicRoutingElements</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">False</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">Next</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">True</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs">DataCloudflareAiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference Fallback { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `False`<sup>Required</sup> <a name="False" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference False { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference Next { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference Success { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `True`<sup>Required</sup> <a name="True" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference True { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs">DataCloudflareAiGatewayDynamicRoutingElementsOutputs</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">AiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">Conditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">LimitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">Window</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties">DataCloudflareAiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="AiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```csharp
public string AiGatewayDynamicRoutingProvider { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```csharp
public string Conditions { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```csharp
public string LimitType { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```csharp
public double Window { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingElementsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties">DataCloudflareAiGatewayDynamicRoutingElementsProperties</a>

---


### DataCloudflareAiGatewayDynamicRoutingVersionOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiGatewayDynamicRoutingVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.isValid">IsValid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion">DataCloudflareAiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```csharp
public IResolvable IsValid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiGatewayDynamicRoutingVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion">DataCloudflareAiGatewayDynamicRoutingVersion</a>

---




# `dataCloudflareZeroTrustAccessAiControlsMcpServers` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpServers` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServers <a name="DataCloudflareZeroTrustAccessAiControlsMcpServers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServers(Construct Scope, string Id, DataCloudflareZeroTrustAccessAiControlsMcpServersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig">DataCloudflareZeroTrustAccessAiControlsMcpServersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig">DataCloudflareZeroTrustAccessAiControlsMcpServersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessAiControlsMcpServers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessAiControlsMcpServers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessAiControlsMcpServers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessAiControlsMcpServers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.search">Search</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.result"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServersConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    double MaxItems = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.search">Search</a></code> | <code>string</code> | Search by id, name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#max_items DataCloudflareZeroTrustAccessAiControlsMcpServers#max_items}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#search DataCloudflareZeroTrustAccessAiControlsMcpServers#search}

---

### DataCloudflareZeroTrustAccessAiControlsMcpServersResult <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResult {

};
```


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails {

};
```


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts {

};
```


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.cause">Cause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.isUpstream">IsUpstream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.mcpCode">McpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.retryable">Retryable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cause`<sup>Required</sup> <a name="Cause" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.cause"></a>

```csharp
public string Cause { get; }
```

- *Type:* string

---

##### `IsUpstream`<sup>Required</sup> <a name="IsUpstream" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.isUpstream"></a>

```csharp
public IResolvable IsUpstream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `McpCode`<sup>Required</sup> <a name="McpCode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.mcpCode"></a>

```csharp
public double McpCode { get; }
```

- *Type:* double

---

##### `Retryable`<sup>Required</sup> <a name="Retryable" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.retryable"></a>

```csharp
public IResolvable Retryable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetails</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get"></a>

```csharp
private DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.errorDetails">ErrorDetails</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.isSharedOauthCallbackEnabled">IsSharedOauthCallbackEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSuccessfulSync">LastSuccessfulSync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSynced">LastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.prompts">Prompts</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.secureWebGateway">SecureWebGateway</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.tools">Tools</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.updatedPrompts">UpdatedPrompts</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.updatedTools">UpdatedTools</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult">DataCloudflareZeroTrustAccessAiControlsMcpServersResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.errorDetails"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference ErrorDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServersResultErrorDetailsOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSharedOauthCallbackEnabled`<sup>Required</sup> <a name="IsSharedOauthCallbackEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.isSharedOauthCallbackEnabled"></a>

```csharp
public IResolvable IsSharedOauthCallbackEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastSuccessfulSync`<sup>Required</sup> <a name="LastSuccessfulSync" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSuccessfulSync"></a>

```csharp
public string LastSuccessfulSync { get; }
```

- *Type:* string

---

##### `LastSynced`<sup>Required</sup> <a name="LastSynced" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSynced"></a>

```csharp
public string LastSynced { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prompts`<sup>Required</sup> <a name="Prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.prompts"></a>

```csharp
public StringMapList Prompts { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `SecureWebGateway`<sup>Required</sup> <a name="SecureWebGateway" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.secureWebGateway"></a>

```csharp
public IResolvable SecureWebGateway { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.tools"></a>

```csharp
public StringMapList Tools { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `UpdatedPrompts`<sup>Required</sup> <a name="UpdatedPrompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.updatedPrompts"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList UpdatedPrompts { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList</a>

---

##### `UpdatedTools`<sup>Required</sup> <a name="UpdatedTools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.updatedTools"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList UpdatedTools { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult">DataCloudflareZeroTrustAccessAiControlsMcpServersResult</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.get"></a>

```csharp
private DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.get"></a>

```csharp
private DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools</a>

---




# `dataCloudflareZeroTrustTunnelCloudflared` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflared` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflared <a name="DataCloudflareZeroTrustTunnelCloudflared" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflared(Construct Scope, string Id, DataCloudflareZeroTrustTunnelCloudflaredConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig">DataCloudflareZeroTrustTunnelCloudflaredConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig">DataCloudflareZeroTrustTunnelCloudflaredConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetTunnelId">ResetTunnelId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustTunnelCloudflaredFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetTunnelId"></a>

```csharp
private void ResetTunnelId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelCloudflared resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflared.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflared.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflared.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflared.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelCloudflared resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflared to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustTunnelCloudflared that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflared to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountTag">AccountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.configSrc">ConfigSrc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsActiveAt">ConnsActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsInactiveAt">ConnsInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.remoteConfig">RemoteConfig</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunType">TunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountTag"></a>

```csharp
public string AccountTag { get; }
```

- *Type:* string

---

##### `ConfigSrc`<sup>Required</sup> <a name="ConfigSrc" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.configSrc"></a>

```csharp
public string ConfigSrc { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connections"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredConnectionsList</a>

---

##### `ConnsActiveAt`<sup>Required</sup> <a name="ConnsActiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsActiveAt"></a>

```csharp
public string ConnsActiveAt { get; }
```

- *Type:* string

---

##### `ConnsInactiveAt`<sup>Required</sup> <a name="ConnsInactiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsInactiveAt"></a>

```csharp
public string ConnsInactiveAt { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filter"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteConfig`<sup>Required</sup> <a name="RemoteConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.remoteConfig"></a>

```csharp
public IResolvable RemoteConfig { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TunType`<sup>Required</sup> <a name="TunType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunType"></a>

```csharp
public string TunType { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustTunnelCloudflaredFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    DataCloudflareZeroTrustTunnelCloudflaredFilter Filter = null,
    string TunnelId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#filter DataCloudflareZeroTrustTunnelCloudflared#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | UUID of the tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#account_id DataCloudflareZeroTrustTunnelCloudflared#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#filter DataCloudflareZeroTrustTunnelCloudflared#filter}.

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#tunnel_id DataCloudflareZeroTrustTunnelCloudflared#tunnel_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredConnections <a name="DataCloudflareZeroTrustTunnelCloudflaredConnections" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredConnections {

};
```


### DataCloudflareZeroTrustTunnelCloudflaredFilter <a name="DataCloudflareZeroTrustTunnelCloudflaredFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredFilter {
    string ExcludePrefix = null,
    string ExistedAt = null,
    string IncludePrefix = null,
    bool|IResolvable IsDeleted = null,
    string Name = null,
    string Status = null,
    string Uuid = null,
    string WasActiveAt = null,
    string WasInactiveAt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.excludePrefix">ExcludePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#exclude_prefix DataCloudflareZeroTrustTunnelCloudflared#exclude_prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.existedAt">ExistedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.includePrefix">IncludePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#include_prefix DataCloudflareZeroTrustTunnelCloudflared#include_prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.isDeleted">IsDeleted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.name">Name</a></code> | <code>string</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.status">Status</a></code> | <code>string</code> | The status of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.uuid">Uuid</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasActiveAt">WasActiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_active_at DataCloudflareZeroTrustTunnelCloudflared#was_active_at}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasInactiveAt">WasInactiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_inactive_at DataCloudflareZeroTrustTunnelCloudflared#was_inactive_at}. |

---

##### `ExcludePrefix`<sup>Optional</sup> <a name="ExcludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.excludePrefix"></a>

```csharp
public string ExcludePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#exclude_prefix DataCloudflareZeroTrustTunnelCloudflared#exclude_prefix}.

---

##### `ExistedAt`<sup>Optional</sup> <a name="ExistedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.existedAt"></a>

```csharp
public string ExistedAt { get; set; }
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#existed_at DataCloudflareZeroTrustTunnelCloudflared#existed_at}

---

##### `IncludePrefix`<sup>Optional</sup> <a name="IncludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.includePrefix"></a>

```csharp
public string IncludePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#include_prefix DataCloudflareZeroTrustTunnelCloudflared#include_prefix}.

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.isDeleted"></a>

```csharp
public bool|IResolvable IsDeleted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#is_deleted DataCloudflareZeroTrustTunnelCloudflared#is_deleted}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#name DataCloudflareZeroTrustTunnelCloudflared#name}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#status DataCloudflareZeroTrustTunnelCloudflared#status}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#uuid DataCloudflareZeroTrustTunnelCloudflared#uuid}

---

##### `WasActiveAt`<sup>Optional</sup> <a name="WasActiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasActiveAt"></a>

```csharp
public string WasActiveAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_active_at DataCloudflareZeroTrustTunnelCloudflared#was_active_at}.

---

##### `WasInactiveAt`<sup>Optional</sup> <a name="WasInactiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasInactiveAt"></a>

```csharp
public string WasInactiveAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_inactive_at DataCloudflareZeroTrustTunnelCloudflared#was_inactive_at}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredConnectionsList <a name="DataCloudflareZeroTrustTunnelCloudflaredConnectionsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get"></a>

```csharp
private DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName">ColoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect">IsPendingReconnect</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt">OpenedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp">OriginIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections">DataCloudflareZeroTrustTunnelCloudflaredConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `ColoName`<sup>Required</sup> <a name="ColoName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName"></a>

```csharp
public string ColoName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPendingReconnect`<sup>Required</sup> <a name="IsPendingReconnect" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect"></a>

```csharp
public IResolvable IsPendingReconnect { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt"></a>

```csharp
public string OpenedAt { get; }
```

- *Type:* string

---

##### `OriginIp`<sup>Required</sup> <a name="OriginIp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp"></a>

```csharp
public string OriginIp { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections">DataCloudflareZeroTrustTunnelCloudflaredConnections</a>

---


### DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExcludePrefix">ResetExcludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExistedAt">ResetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIncludePrefix">ResetIncludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasActiveAt">ResetWasActiveAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasInactiveAt">ResetWasInactiveAt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefix` <a name="ResetExcludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExcludePrefix"></a>

```csharp
private void ResetExcludePrefix()
```

##### `ResetExistedAt` <a name="ResetExistedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExistedAt"></a>

```csharp
private void ResetExistedAt()
```

##### `ResetIncludePrefix` <a name="ResetIncludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIncludePrefix"></a>

```csharp
private void ResetIncludePrefix()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIsDeleted"></a>

```csharp
private void ResetIsDeleted()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetWasActiveAt` <a name="ResetWasActiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasActiveAt"></a>

```csharp
private void ResetWasActiveAt()
```

##### `ResetWasInactiveAt` <a name="ResetWasInactiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasInactiveAt"></a>

```csharp
private void ResetWasInactiveAt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefixInput">ExcludePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAtInput">ExistedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefixInput">IncludePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeletedInput">IsDeletedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAtInput">WasActiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAtInput">WasInactiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefix">ExcludePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAt">ExistedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefix">IncludePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeleted">IsDeleted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAt">WasActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAt">WasInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludePrefixInput`<sup>Optional</sup> <a name="ExcludePrefixInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefixInput"></a>

```csharp
public string ExcludePrefixInput { get; }
```

- *Type:* string

---

##### `ExistedAtInput`<sup>Optional</sup> <a name="ExistedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAtInput"></a>

```csharp
public string ExistedAtInput { get; }
```

- *Type:* string

---

##### `IncludePrefixInput`<sup>Optional</sup> <a name="IncludePrefixInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefixInput"></a>

```csharp
public string IncludePrefixInput { get; }
```

- *Type:* string

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeletedInput"></a>

```csharp
public bool|IResolvable IsDeletedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `WasActiveAtInput`<sup>Optional</sup> <a name="WasActiveAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAtInput"></a>

```csharp
public string WasActiveAtInput { get; }
```

- *Type:* string

---

##### `WasInactiveAtInput`<sup>Optional</sup> <a name="WasInactiveAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAtInput"></a>

```csharp
public string WasInactiveAtInput { get; }
```

- *Type:* string

---

##### `ExcludePrefix`<sup>Required</sup> <a name="ExcludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefix"></a>

```csharp
public string ExcludePrefix { get; }
```

- *Type:* string

---

##### `ExistedAt`<sup>Required</sup> <a name="ExistedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAt"></a>

```csharp
public string ExistedAt { get; }
```

- *Type:* string

---

##### `IncludePrefix`<sup>Required</sup> <a name="IncludePrefix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefix"></a>

```csharp
public string IncludePrefix { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeleted"></a>

```csharp
public bool|IResolvable IsDeleted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `WasActiveAt`<sup>Required</sup> <a name="WasActiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAt"></a>

```csharp
public string WasActiveAt { get; }
```

- *Type:* string

---

##### `WasInactiveAt`<sup>Required</sup> <a name="WasInactiveAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAt"></a>

```csharp
public string WasInactiveAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustTunnelCloudflaredFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---




# `zeroTrustAccessAiControlsMcpServer` Submodule <a name="`zeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpServer <a name="ZeroTrustAccessAiControlsMcpServer" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.NewZeroTrustAccessAiControlsMcpServer(scope Construct, id *string, config ZeroTrustAccessAiControlsMcpServerConfig) ZeroTrustAccessAiControlsMcpServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig">ZeroTrustAccessAiControlsMcpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig">ZeroTrustAccessAiControlsMcpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedPrompts">PutUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedTools">PutUpdatedTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials">ResetAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetUpdatedPrompts">ResetUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetUpdatedTools">ResetUpdatedTools</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUpdatedPrompts` <a name="PutUpdatedPrompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedPrompts"></a>

```go
func PutUpdatedPrompts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedPrompts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdatedTools` <a name="PutUpdatedTools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedTools"></a>

```go
func PutUpdatedTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.putUpdatedTools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAuthCredentials` <a name="ResetAuthCredentials" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials"></a>

```go
func ResetAuthCredentials()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetUpdatedPrompts` <a name="ResetUpdatedPrompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetUpdatedPrompts"></a>

```go
func ResetUpdatedPrompts()
```

##### `ResetUpdatedTools` <a name="ResetUpdatedTools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetUpdatedTools"></a>

```go
func ResetUpdatedTools()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync">LastSuccessfulSync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced">LastSynced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts">Prompts</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools">Tools</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedPrompts">UpdatedPrompts</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList">ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedTools">UpdatedTools</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList">ZeroTrustAccessAiControlsMcpServerUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput">AuthCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedPromptsInput">UpdatedPromptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedToolsInput">UpdatedToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials">AuthCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `LastSuccessfulSync`<sup>Required</sup> <a name="LastSuccessfulSync" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync"></a>

```go
func LastSuccessfulSync() *string
```

- *Type:* *string

---

##### `LastSynced`<sup>Required</sup> <a name="LastSynced" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```go
func LastSynced() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `Prompts`<sup>Required</sup> <a name="Prompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```go
func Prompts() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```go
func Tools() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `UpdatedPrompts`<sup>Required</sup> <a name="UpdatedPrompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedPrompts"></a>

```go
func UpdatedPrompts() ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList">ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList</a>

---

##### `UpdatedTools`<sup>Required</sup> <a name="UpdatedTools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedTools"></a>

```go
func UpdatedTools() ZeroTrustAccessAiControlsMcpServerUpdatedToolsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList">ZeroTrustAccessAiControlsMcpServerUpdatedToolsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AuthCredentialsInput`<sup>Optional</sup> <a name="AuthCredentialsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput"></a>

```go
func AuthCredentialsInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UpdatedPromptsInput`<sup>Optional</sup> <a name="UpdatedPromptsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedPromptsInput"></a>

```go
func UpdatedPromptsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatedToolsInput`<sup>Optional</sup> <a name="UpdatedToolsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.updatedToolsInput"></a>

```go
func UpdatedToolsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AuthCredentials`<sup>Required</sup> <a name="AuthCredentials" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials"></a>

```go
func AuthCredentials() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpServerConfig <a name="ZeroTrustAccessAiControlsMcpServerConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

&zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthType: *string,
	Hostname: *string,
	Id: *string,
	Name: *string,
	AccountId: *string,
	AuthCredentials: *string,
	Description: *string,
	UpdatedPrompts: interface{},
	UpdatedTools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType">AuthType</a></code> | <code>*string</code> | Available values: "oauth", "bearer", "unauthenticated". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id">Id</a></code> | <code>*string</code> | server id. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials">AuthCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.updatedPrompts">UpdatedPrompts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_prompts ZeroTrustAccessAiControlsMcpServer#updated_prompts}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.updatedTools">UpdatedTools</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_tools ZeroTrustAccessAiControlsMcpServer#updated_tools}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Available values: "oauth", "bearer", "unauthenticated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `AuthCredentials`<sup>Optional</sup> <a name="AuthCredentials" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials"></a>

```go
AuthCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---

##### `UpdatedPrompts`<sup>Optional</sup> <a name="UpdatedPrompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.updatedPrompts"></a>

```go
UpdatedPrompts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_prompts ZeroTrustAccessAiControlsMcpServer#updated_prompts}.

---

##### `UpdatedTools`<sup>Optional</sup> <a name="UpdatedTools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.updatedTools"></a>

```go
UpdatedTools interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_tools ZeroTrustAccessAiControlsMcpServer#updated_tools}.

---

### ZeroTrustAccessAiControlsMcpServerUpdatedPrompts <a name="ZeroTrustAccessAiControlsMcpServerUpdatedPrompts" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

&zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts {
	Name: *string,
	Alias: *string,
	Description: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPrompts.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}.

---

### ZeroTrustAccessAiControlsMcpServerUpdatedTools <a name="ZeroTrustAccessAiControlsMcpServerUpdatedTools" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

&zerotrustaccessaicontrolsmcpserver.ZeroTrustAccessAiControlsMcpServerUpdatedTools {
	Name: *string,
	Alias: *string,
	Description: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedTools.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList <a name="ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.NewZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference <a name="ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.NewZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpServerUpdatedToolsList <a name="ZeroTrustAccessAiControlsMcpServerUpdatedToolsList" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.NewZeroTrustAccessAiControlsMcpServerUpdatedToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessAiControlsMcpServerUpdatedToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference <a name="ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustaccessaicontrolsmcpserver"

zerotrustaccessaicontrolsmcpserver.NewZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




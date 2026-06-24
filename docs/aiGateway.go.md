# `aiGateway` Submodule <a name="`aiGateway` Submodule" id="@cdktn/provider-cloudflare.aiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGateway <a name="AiGateway" id="@cdktn/provider-cloudflare.aiGateway.AiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway cloudflare_ai_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGateway(scope Construct, id *string, config AiGatewayConfig) AiGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig">AiGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig">AiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp">PutDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails">PutGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel">PutOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits">PutSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe">PutStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp">ResetDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement">ResetLogManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy">ResetLogManagementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey">ResetLogpushPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel">ResetOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique">ResetRateLimitingTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff">ResetRetryBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay">ResetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts">ResetRetryMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits">ResetSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe">ResetStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode">ResetWorkersAiBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr">ResetZdr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDlp` <a name="PutDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp"></a>

```go
func PutDlp(value AiGatewayDlp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `PutGuardrails` <a name="PutGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails"></a>

```go
func PutGuardrails(value AiGatewayGuardrails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `PutOtel` <a name="PutOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel"></a>

```go
func PutOtel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpendLimits` <a name="PutSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits"></a>

```go
func PutSpendLimits(value AiGatewaySpendLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `PutStripe` <a name="PutStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe"></a>

```go
func PutStripe(value AiGatewayStripe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetDlp` <a name="ResetDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp"></a>

```go
func ResetDlp()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails"></a>

```go
func ResetGuardrails()
```

##### `ResetLogManagement` <a name="ResetLogManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement"></a>

```go
func ResetLogManagement()
```

##### `ResetLogManagementStrategy` <a name="ResetLogManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy"></a>

```go
func ResetLogManagementStrategy()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush"></a>

```go
func ResetLogpush()
```

##### `ResetLogpushPublicKey` <a name="ResetLogpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey"></a>

```go
func ResetLogpushPublicKey()
```

##### `ResetOtel` <a name="ResetOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel"></a>

```go
func ResetOtel()
```

##### `ResetRateLimitingTechnique` <a name="ResetRateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique"></a>

```go
func ResetRateLimitingTechnique()
```

##### `ResetRetryBackoff` <a name="ResetRetryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff"></a>

```go
func ResetRetryBackoff()
```

##### `ResetRetryDelay` <a name="ResetRetryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay"></a>

```go
func ResetRetryDelay()
```

##### `ResetRetryMaxAttempts` <a name="ResetRetryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts"></a>

```go
func ResetRetryMaxAttempts()
```

##### `ResetSpendLimits` <a name="ResetSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits"></a>

```go
func ResetSpendLimits()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId"></a>

```go
func ResetStoreId()
```

##### `ResetStripe` <a name="ResetStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe"></a>

```go
func ResetStripe()
```

##### `ResetWorkersAiBillingMode` <a name="ResetWorkersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode"></a>

```go
func ResetWorkersAiBillingMode()
```

##### `ResetZdr` <a name="ResetZdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr"></a>

```go
func ResetZdr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.AiGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.AiGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.AiGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.AiGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp">Dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails">Guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel">Otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits">SpendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe">Stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput">CacheInvalidateOnUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput">CacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput">CollectLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput">DlpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput">GuardrailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput">LogManagementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput">LogManagementStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput">LogpushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput">LogpushPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput">OtelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput">RateLimitingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput">RateLimitingLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput">RateLimitingTechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput">RetryBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput">RetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput">RetryMaxAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput">SpendLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput">StoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput">StripeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput">WorkersAiBillingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput">ZdrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication">Authentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate">CacheInvalidateOnUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl">CacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs">CollectLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement">LogManagement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy">LogManagementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush">Logpush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey">LogpushPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval">RateLimitingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit">RateLimitingLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique">RateLimitingTechnique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff">RetryBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts">RetryMaxAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId">StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode">WorkersAiBillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr">Zdr</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Dlp`<sup>Required</sup> <a name="Dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp"></a>

```go
func Dlp() AiGatewayDlpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a>

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails"></a>

```go
func Guardrails() AiGatewayGuardrailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a>

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Otel`<sup>Required</sup> <a name="Otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel"></a>

```go
func Otel() AiGatewayOtelList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a>

---

##### `SpendLimits`<sup>Required</sup> <a name="SpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits"></a>

```go
func SpendLimits() AiGatewaySpendLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a>

---

##### `Stripe`<sup>Required</sup> <a name="Stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe"></a>

```go
func Stripe() AiGatewayStripeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `CacheInvalidateOnUpdateInput`<sup>Optional</sup> <a name="CacheInvalidateOnUpdateInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput"></a>

```go
func CacheInvalidateOnUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `CacheTtlInput`<sup>Optional</sup> <a name="CacheTtlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput"></a>

```go
func CacheTtlInput() *f64
```

- *Type:* *f64

---

##### `CollectLogsInput`<sup>Optional</sup> <a name="CollectLogsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput"></a>

```go
func CollectLogsInput() interface{}
```

- *Type:* interface{}

---

##### `DlpInput`<sup>Optional</sup> <a name="DlpInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput"></a>

```go
func DlpInput() interface{}
```

- *Type:* interface{}

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput"></a>

```go
func GuardrailsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogManagementInput`<sup>Optional</sup> <a name="LogManagementInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput"></a>

```go
func LogManagementInput() *f64
```

- *Type:* *f64

---

##### `LogManagementStrategyInput`<sup>Optional</sup> <a name="LogManagementStrategyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput"></a>

```go
func LogManagementStrategyInput() *string
```

- *Type:* *string

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput"></a>

```go
func LogpushInput() interface{}
```

- *Type:* interface{}

---

##### `LogpushPublicKeyInput`<sup>Optional</sup> <a name="LogpushPublicKeyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput"></a>

```go
func LogpushPublicKeyInput() *string
```

- *Type:* *string

---

##### `OtelInput`<sup>Optional</sup> <a name="OtelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput"></a>

```go
func OtelInput() interface{}
```

- *Type:* interface{}

---

##### `RateLimitingIntervalInput`<sup>Optional</sup> <a name="RateLimitingIntervalInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput"></a>

```go
func RateLimitingIntervalInput() *f64
```

- *Type:* *f64

---

##### `RateLimitingLimitInput`<sup>Optional</sup> <a name="RateLimitingLimitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput"></a>

```go
func RateLimitingLimitInput() *f64
```

- *Type:* *f64

---

##### `RateLimitingTechniqueInput`<sup>Optional</sup> <a name="RateLimitingTechniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput"></a>

```go
func RateLimitingTechniqueInput() *string
```

- *Type:* *string

---

##### `RetryBackoffInput`<sup>Optional</sup> <a name="RetryBackoffInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput"></a>

```go
func RetryBackoffInput() *string
```

- *Type:* *string

---

##### `RetryDelayInput`<sup>Optional</sup> <a name="RetryDelayInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput"></a>

```go
func RetryDelayInput() *f64
```

- *Type:* *f64

---

##### `RetryMaxAttemptsInput`<sup>Optional</sup> <a name="RetryMaxAttemptsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput"></a>

```go
func RetryMaxAttemptsInput() *f64
```

- *Type:* *f64

---

##### `SpendLimitsInput`<sup>Optional</sup> <a name="SpendLimitsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput"></a>

```go
func SpendLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput"></a>

```go
func StoreIdInput() *string
```

- *Type:* *string

---

##### `StripeInput`<sup>Optional</sup> <a name="StripeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput"></a>

```go
func StripeInput() interface{}
```

- *Type:* interface{}

---

##### `WorkersAiBillingModeInput`<sup>Optional</sup> <a name="WorkersAiBillingModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput"></a>

```go
func WorkersAiBillingModeInput() *string
```

- *Type:* *string

---

##### `ZdrInput`<sup>Optional</sup> <a name="ZdrInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput"></a>

```go
func ZdrInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication"></a>

```go
func Authentication() interface{}
```

- *Type:* interface{}

---

##### `CacheInvalidateOnUpdate`<sup>Required</sup> <a name="CacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate"></a>

```go
func CacheInvalidateOnUpdate() interface{}
```

- *Type:* interface{}

---

##### `CacheTtl`<sup>Required</sup> <a name="CacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl"></a>

```go
func CacheTtl() *f64
```

- *Type:* *f64

---

##### `CollectLogs`<sup>Required</sup> <a name="CollectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs"></a>

```go
func CollectLogs() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogManagement`<sup>Required</sup> <a name="LogManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement"></a>

```go
func LogManagement() *f64
```

- *Type:* *f64

---

##### `LogManagementStrategy`<sup>Required</sup> <a name="LogManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy"></a>

```go
func LogManagementStrategy() *string
```

- *Type:* *string

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush"></a>

```go
func Logpush() interface{}
```

- *Type:* interface{}

---

##### `LogpushPublicKey`<sup>Required</sup> <a name="LogpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey"></a>

```go
func LogpushPublicKey() *string
```

- *Type:* *string

---

##### `RateLimitingInterval`<sup>Required</sup> <a name="RateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval"></a>

```go
func RateLimitingInterval() *f64
```

- *Type:* *f64

---

##### `RateLimitingLimit`<sup>Required</sup> <a name="RateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit"></a>

```go
func RateLimitingLimit() *f64
```

- *Type:* *f64

---

##### `RateLimitingTechnique`<sup>Required</sup> <a name="RateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique"></a>

```go
func RateLimitingTechnique() *string
```

- *Type:* *string

---

##### `RetryBackoff`<sup>Required</sup> <a name="RetryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff"></a>

```go
func RetryBackoff() *string
```

- *Type:* *string

---

##### `RetryDelay`<sup>Required</sup> <a name="RetryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay"></a>

```go
func RetryDelay() *f64
```

- *Type:* *f64

---

##### `RetryMaxAttempts`<sup>Required</sup> <a name="RetryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts"></a>

```go
func RetryMaxAttempts() *f64
```

- *Type:* *f64

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId"></a>

```go
func StoreId() *string
```

- *Type:* *string

---

##### `WorkersAiBillingMode`<sup>Required</sup> <a name="WorkersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode"></a>

```go
func WorkersAiBillingMode() *string
```

- *Type:* *string

---

##### `Zdr`<sup>Required</sup> <a name="Zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr"></a>

```go
func Zdr() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayConfig <a name="AiGatewayConfig" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CacheInvalidateOnUpdate: interface{},
	CacheTtl: *f64,
	CollectLogs: interface{},
	Id: *string,
	RateLimitingInterval: *f64,
	RateLimitingLimit: *f64,
	Authentication: interface{},
	Dlp: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewayDlp,
	Guardrails: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewayGuardrails,
	LogManagement: *f64,
	LogManagementStrategy: *string,
	Logpush: interface{},
	LogpushPublicKey: *string,
	Otel: interface{},
	RateLimitingTechnique: *string,
	RetryBackoff: *string,
	RetryDelay: *f64,
	RetryMaxAttempts: *f64,
	SpendLimits: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewaySpendLimits,
	StoreId: *string,
	Stripe: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewayStripe,
	WorkersAiBillingMode: *string,
	Zdr: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate">CacheInvalidateOnUpdate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl">CacheTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs">CollectLogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id">Id</a></code> | <code>*string</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval">RateLimitingInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit">RateLimitingLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication">Authentication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp">Dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails">Guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement">LogManagement</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy">LogManagementStrategy</a></code> | <code>*string</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush">Logpush</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey">LogpushPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel">Otel</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique">RateLimitingTechnique</a></code> | <code>*string</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff">RetryBackoff</a></code> | <code>*string</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts">RetryMaxAttempts</a></code> | <code>*f64</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits">SpendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId">StoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe">Stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode">WorkersAiBillingMode</a></code> | <code>*string</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr">Zdr</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `CacheInvalidateOnUpdate`<sup>Required</sup> <a name="CacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate"></a>

```go
CacheInvalidateOnUpdate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `CacheTtl`<sup>Required</sup> <a name="CacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl"></a>

```go
CacheTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `CollectLogs`<sup>Required</sup> <a name="CollectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs"></a>

```go
CollectLogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RateLimitingInterval`<sup>Required</sup> <a name="RateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval"></a>

```go
RateLimitingInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `RateLimitingLimit`<sup>Required</sup> <a name="RateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit"></a>

```go
RateLimitingLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication"></a>

```go
Authentication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authentication AiGateway#authentication}.

---

##### `Dlp`<sup>Optional</sup> <a name="Dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp"></a>

```go
Dlp AiGatewayDlp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#dlp AiGateway#dlp}.

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails"></a>

```go
Guardrails AiGatewayGuardrails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#guardrails AiGateway#guardrails}.

---

##### `LogManagement`<sup>Optional</sup> <a name="LogManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement"></a>

```go
LogManagement *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `LogManagementStrategy`<sup>Optional</sup> <a name="LogManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy"></a>

```go
LogManagementStrategy *string
```

- *Type:* *string

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush"></a>

```go
Logpush interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `LogpushPublicKey`<sup>Optional</sup> <a name="LogpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey"></a>

```go
LogpushPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `Otel`<sup>Optional</sup> <a name="Otel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel"></a>

```go
Otel interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `RateLimitingTechnique`<sup>Optional</sup> <a name="RateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique"></a>

```go
RateLimitingTechnique *string
```

- *Type:* *string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `RetryBackoff`<sup>Optional</sup> <a name="RetryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff"></a>

```go
RetryBackoff *string
```

- *Type:* *string

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `RetryDelay`<sup>Optional</sup> <a name="RetryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay"></a>

```go
RetryDelay *f64
```

- *Type:* *f64

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `RetryMaxAttempts`<sup>Optional</sup> <a name="RetryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts"></a>

```go
RetryMaxAttempts *f64
```

- *Type:* *f64

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `SpendLimits`<sup>Optional</sup> <a name="SpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits"></a>

```go
SpendLimits AiGatewaySpendLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId"></a>

```go
StoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `Stripe`<sup>Optional</sup> <a name="Stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe"></a>

```go
Stripe AiGatewayStripe
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `WorkersAiBillingMode`<sup>Optional</sup> <a name="WorkersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode"></a>

```go
WorkersAiBillingMode *string
```

- *Type:* *string

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `Zdr`<sup>Optional</sup> <a name="Zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr"></a>

```go
Zdr interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

### AiGatewayDlp <a name="AiGatewayDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayDlp {
	Enabled: interface{},
	Action: *string,
	Policies: interface{},
	Profiles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action">Action</a></code> | <code>*string</code> | Available values: "BLOCK", "FLAG". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies">Policies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#policies AiGateway#policies}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles">Profiles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action"></a>

```go
Action *string
```

- *Type:* *string

Available values: "BLOCK", "FLAG".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies"></a>

```go
Policies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#policies AiGateway#policies}.

---

##### `Profiles`<sup>Optional</sup> <a name="Profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayDlpPolicies <a name="AiGatewayDlpPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayDlpPolicies {
	Action: *string,
	Check: *[]*string,
	Enabled: interface{},
	Id: *string,
	Profiles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action">Action</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check">Check</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#check AiGateway#check}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles">Profiles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action"></a>

```go
Action *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check"></a>

```go
Check *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#check AiGateway#check}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayGuardrails <a name="AiGatewayGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayGuardrails {
	Prompt: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewayGuardrailsPrompt,
	Response: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewayGuardrailsResponse,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt">Prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#prompt AiGateway#prompt}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response">Response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#response AiGateway#response}. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt"></a>

```go
Prompt AiGatewayGuardrailsPrompt
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#prompt AiGateway#prompt}.

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response"></a>

```go
Response AiGatewayGuardrailsResponse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#response AiGateway#response}.

---

### AiGatewayGuardrailsPrompt <a name="AiGatewayGuardrailsPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayGuardrailsPrompt {
	P1: *string,
	S1: *string,
	S10: *string,
	S11: *string,
	S12: *string,
	S13: *string,
	S2: *string,
	S3: *string,
	S4: *string,
	S5: *string,
	S6: *string,
	S7: *string,
	S8: *string,
	S9: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1">P1</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1">S1</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10">S10</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11">S11</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12">S12</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13">S13</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2">S2</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3">S3</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4">S4</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5">S5</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6">S6</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7">S7</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8">S8</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9">S9</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |

---

##### `P1`<sup>Optional</sup> <a name="P1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1"></a>

```go
P1 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `S1`<sup>Optional</sup> <a name="S1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1"></a>

```go
S1 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `S10`<sup>Optional</sup> <a name="S10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10"></a>

```go
S10 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `S11`<sup>Optional</sup> <a name="S11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11"></a>

```go
S11 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `S12`<sup>Optional</sup> <a name="S12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12"></a>

```go
S12 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `S13`<sup>Optional</sup> <a name="S13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13"></a>

```go
S13 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `S2`<sup>Optional</sup> <a name="S2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2"></a>

```go
S2 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3"></a>

```go
S3 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `S4`<sup>Optional</sup> <a name="S4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4"></a>

```go
S4 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `S5`<sup>Optional</sup> <a name="S5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5"></a>

```go
S5 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `S6`<sup>Optional</sup> <a name="S6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6"></a>

```go
S6 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `S7`<sup>Optional</sup> <a name="S7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7"></a>

```go
S7 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `S8`<sup>Optional</sup> <a name="S8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8"></a>

```go
S8 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `S9`<sup>Optional</sup> <a name="S9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9"></a>

```go
S9 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayGuardrailsResponse <a name="AiGatewayGuardrailsResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayGuardrailsResponse {
	P1: *string,
	S1: *string,
	S10: *string,
	S11: *string,
	S12: *string,
	S13: *string,
	S2: *string,
	S3: *string,
	S4: *string,
	S5: *string,
	S6: *string,
	S7: *string,
	S8: *string,
	S9: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1">P1</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1">S1</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10">S10</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11">S11</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12">S12</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13">S13</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2">S2</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3">S3</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4">S4</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5">S5</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6">S6</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7">S7</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8">S8</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9">S9</a></code> | <code>*string</code> | Available values: "FLAG", "BLOCK". |

---

##### `P1`<sup>Optional</sup> <a name="P1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1"></a>

```go
P1 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `S1`<sup>Optional</sup> <a name="S1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1"></a>

```go
S1 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `S10`<sup>Optional</sup> <a name="S10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10"></a>

```go
S10 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `S11`<sup>Optional</sup> <a name="S11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11"></a>

```go
S11 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `S12`<sup>Optional</sup> <a name="S12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12"></a>

```go
S12 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `S13`<sup>Optional</sup> <a name="S13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13"></a>

```go
S13 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `S2`<sup>Optional</sup> <a name="S2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2"></a>

```go
S2 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3"></a>

```go
S3 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `S4`<sup>Optional</sup> <a name="S4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4"></a>

```go
S4 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `S5`<sup>Optional</sup> <a name="S5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5"></a>

```go
S5 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `S6`<sup>Optional</sup> <a name="S6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6"></a>

```go
S6 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `S7`<sup>Optional</sup> <a name="S7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7"></a>

```go
S7 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `S8`<sup>Optional</sup> <a name="S8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8"></a>

```go
S8 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `S9`<sup>Optional</sup> <a name="S9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9"></a>

```go
S9 *string
```

- *Type:* *string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayOtel <a name="AiGatewayOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayOtel {
	Headers: *map[string]*string,
	Url: *string,
	Authorization: *string,
	ContentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#headers AiGateway#headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#url AiGateway#url}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType">ContentType</a></code> | <code>*string</code> | Available values: "json", "protobuf". |

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#headers AiGateway#headers}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#url AiGateway#url}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Available values: "json", "protobuf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#content_type AiGateway#content_type}

---

### AiGatewaySpendLimits <a name="AiGatewaySpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewaySpendLimits {
	Enabled: interface{},
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules">Rules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rules AiGateway#rules}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rules AiGateway#rules}.

---

### AiGatewaySpendLimitsRules <a name="AiGatewaySpendLimitsRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewaySpendLimitsRules {
	Limit: *f64,
	LimitType: *string,
	Window: *f64,
	AiGatewayProvider: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider,
	Enabled: interface{},
	Id: *string,
	Metadata: interface{},
	Model: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.aiGateway.AiGatewaySpendLimitsRulesModel,
	Technique: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit">Limit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit AiGateway#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType">LimitType</a></code> | <code>*string</code> | Available values: "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window">Window</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#window AiGateway#window}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider">AiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata">Metadata</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#metadata AiGateway#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model">Model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#model AiGateway#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique">Technique</a></code> | <code>*string</code> | Available values: "fixed", "sliding". |

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit AiGateway#limit}.

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType"></a>

```go
LimitType *string
```

- *Type:* *string

Available values: "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit_type AiGateway#limit_type}

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window"></a>

```go
Window *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#window AiGateway#window}.

---

##### `AiGatewayProvider`<sup>Optional</sup> <a name="AiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider"></a>

```go
AiGatewayProvider AiGatewaySpendLimitsRulesAiGatewayProvider
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#metadata AiGateway#metadata}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model"></a>

```go
Model AiGatewaySpendLimitsRulesModel
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#model AiGateway#model}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique"></a>

```go
Technique *string
```

- *Type:* *string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#technique AiGateway#technique}

---

### AiGatewaySpendLimitsRulesAiGatewayProvider <a name="AiGatewaySpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewaySpendLimitsRulesAiGatewayProvider {
	Mode: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode">Mode</a></code> | <code>*string</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesMetadata <a name="AiGatewaySpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewaySpendLimitsRulesMetadata {
	Mode: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode">Mode</a></code> | <code>*string</code> | Available values: "partition", "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Available values: "partition", "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesModel <a name="AiGatewaySpendLimitsRulesModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewaySpendLimitsRulesModel {
	Mode: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode">Mode</a></code> | <code>*string</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewayStripe <a name="AiGatewayStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayStripe {
	Authorization: *string,
	UsageEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents">UsageEvents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `UsageEvents`<sup>Required</sup> <a name="UsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents"></a>

```go
UsageEvents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}.

---

### AiGatewayStripeUsageEvents <a name="AiGatewayStripeUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

&aigateway.AiGatewayStripeUsageEvents {
	Payload: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload">Payload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#payload AiGateway#payload}. |

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#payload AiGateway#payload}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDlpOutputReference <a name="AiGatewayDlpOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayDlpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayDlpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles">ResetProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicies` <a name="PutPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies"></a>

```go
func PutPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetProfiles` <a name="ResetProfiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles"></a>

```go
func ResetProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies"></a>

```go
func Policies() AiGatewayDlpPoliciesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput"></a>

```go
func PoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayDlpPoliciesList <a name="AiGatewayDlpPoliciesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayDlpPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayDlpPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get"></a>

```go
func Get(index *f64) AiGatewayDlpPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayDlpPoliciesOutputReference <a name="AiGatewayDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayDlpPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayDlpPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput">CheckInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check">Check</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput"></a>

```go
func CheckInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check"></a>

```go
func Check() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayGuardrailsOutputReference <a name="AiGatewayGuardrailsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayGuardrailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayGuardrailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt">PutPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse">PutResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrompt` <a name="PutPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt"></a>

```go
func PutPrompt(value AiGatewayGuardrailsPrompt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `PutResponse` <a name="PutResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse"></a>

```go
func PutResponse(value AiGatewayGuardrailsResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt">Prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response">Response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput">PromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput">ResponseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt"></a>

```go
func Prompt() AiGatewayGuardrailsPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a>

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response"></a>

```go
func Response() AiGatewayGuardrailsResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a>

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput"></a>

```go
func PromptInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput"></a>

```go
func ResponseInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayGuardrailsPromptOutputReference <a name="AiGatewayGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayGuardrailsPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayGuardrailsPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1">ResetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1">ResetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10">ResetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11">ResetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12">ResetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13">ResetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2">ResetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4">ResetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5">ResetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6">ResetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7">ResetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8">ResetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9">ResetS9</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetP1` <a name="ResetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1"></a>

```go
func ResetP1()
```

##### `ResetS1` <a name="ResetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1"></a>

```go
func ResetS1()
```

##### `ResetS10` <a name="ResetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10"></a>

```go
func ResetS10()
```

##### `ResetS11` <a name="ResetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11"></a>

```go
func ResetS11()
```

##### `ResetS12` <a name="ResetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12"></a>

```go
func ResetS12()
```

##### `ResetS13` <a name="ResetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13"></a>

```go
func ResetS13()
```

##### `ResetS2` <a name="ResetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2"></a>

```go
func ResetS2()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetS4` <a name="ResetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4"></a>

```go
func ResetS4()
```

##### `ResetS5` <a name="ResetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5"></a>

```go
func ResetS5()
```

##### `ResetS6` <a name="ResetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6"></a>

```go
func ResetS6()
```

##### `ResetS7` <a name="ResetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7"></a>

```go
func ResetS7()
```

##### `ResetS8` <a name="ResetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8"></a>

```go
func ResetS8()
```

##### `ResetS9` <a name="ResetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9"></a>

```go
func ResetS9()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input">P1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input">S10Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input">S11Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input">S12Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input">S13Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input">S1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input">S2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input">S3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input">S4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input">S5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input">S6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input">S7Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input">S8Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input">S9Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1">P1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1">S1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10">S10</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11">S11</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12">S12</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13">S13</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2">S2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3">S3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4">S4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5">S5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6">S6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7">S7</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8">S8</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9">S9</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `P1Input`<sup>Optional</sup> <a name="P1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input"></a>

```go
func P1Input() *string
```

- *Type:* *string

---

##### `S10Input`<sup>Optional</sup> <a name="S10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input"></a>

```go
func S10Input() *string
```

- *Type:* *string

---

##### `S11Input`<sup>Optional</sup> <a name="S11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input"></a>

```go
func S11Input() *string
```

- *Type:* *string

---

##### `S12Input`<sup>Optional</sup> <a name="S12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input"></a>

```go
func S12Input() *string
```

- *Type:* *string

---

##### `S13Input`<sup>Optional</sup> <a name="S13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input"></a>

```go
func S13Input() *string
```

- *Type:* *string

---

##### `S1Input`<sup>Optional</sup> <a name="S1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input"></a>

```go
func S1Input() *string
```

- *Type:* *string

---

##### `S2Input`<sup>Optional</sup> <a name="S2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input"></a>

```go
func S2Input() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input"></a>

```go
func S3Input() *string
```

- *Type:* *string

---

##### `S4Input`<sup>Optional</sup> <a name="S4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input"></a>

```go
func S4Input() *string
```

- *Type:* *string

---

##### `S5Input`<sup>Optional</sup> <a name="S5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input"></a>

```go
func S5Input() *string
```

- *Type:* *string

---

##### `S6Input`<sup>Optional</sup> <a name="S6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input"></a>

```go
func S6Input() *string
```

- *Type:* *string

---

##### `S7Input`<sup>Optional</sup> <a name="S7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input"></a>

```go
func S7Input() *string
```

- *Type:* *string

---

##### `S8Input`<sup>Optional</sup> <a name="S8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input"></a>

```go
func S8Input() *string
```

- *Type:* *string

---

##### `S9Input`<sup>Optional</sup> <a name="S9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input"></a>

```go
func S9Input() *string
```

- *Type:* *string

---

##### `P1`<sup>Required</sup> <a name="P1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1"></a>

```go
func P1() *string
```

- *Type:* *string

---

##### `S1`<sup>Required</sup> <a name="S1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1"></a>

```go
func S1() *string
```

- *Type:* *string

---

##### `S10`<sup>Required</sup> <a name="S10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10"></a>

```go
func S10() *string
```

- *Type:* *string

---

##### `S11`<sup>Required</sup> <a name="S11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11"></a>

```go
func S11() *string
```

- *Type:* *string

---

##### `S12`<sup>Required</sup> <a name="S12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12"></a>

```go
func S12() *string
```

- *Type:* *string

---

##### `S13`<sup>Required</sup> <a name="S13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13"></a>

```go
func S13() *string
```

- *Type:* *string

---

##### `S2`<sup>Required</sup> <a name="S2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2"></a>

```go
func S2() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3"></a>

```go
func S3() *string
```

- *Type:* *string

---

##### `S4`<sup>Required</sup> <a name="S4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4"></a>

```go
func S4() *string
```

- *Type:* *string

---

##### `S5`<sup>Required</sup> <a name="S5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5"></a>

```go
func S5() *string
```

- *Type:* *string

---

##### `S6`<sup>Required</sup> <a name="S6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6"></a>

```go
func S6() *string
```

- *Type:* *string

---

##### `S7`<sup>Required</sup> <a name="S7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7"></a>

```go
func S7() *string
```

- *Type:* *string

---

##### `S8`<sup>Required</sup> <a name="S8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8"></a>

```go
func S8() *string
```

- *Type:* *string

---

##### `S9`<sup>Required</sup> <a name="S9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9"></a>

```go
func S9() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayGuardrailsResponseOutputReference <a name="AiGatewayGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayGuardrailsResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayGuardrailsResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1">ResetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1">ResetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10">ResetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11">ResetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12">ResetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13">ResetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2">ResetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4">ResetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5">ResetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6">ResetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7">ResetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8">ResetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9">ResetS9</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetP1` <a name="ResetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1"></a>

```go
func ResetP1()
```

##### `ResetS1` <a name="ResetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1"></a>

```go
func ResetS1()
```

##### `ResetS10` <a name="ResetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10"></a>

```go
func ResetS10()
```

##### `ResetS11` <a name="ResetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11"></a>

```go
func ResetS11()
```

##### `ResetS12` <a name="ResetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12"></a>

```go
func ResetS12()
```

##### `ResetS13` <a name="ResetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13"></a>

```go
func ResetS13()
```

##### `ResetS2` <a name="ResetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2"></a>

```go
func ResetS2()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetS4` <a name="ResetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4"></a>

```go
func ResetS4()
```

##### `ResetS5` <a name="ResetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5"></a>

```go
func ResetS5()
```

##### `ResetS6` <a name="ResetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6"></a>

```go
func ResetS6()
```

##### `ResetS7` <a name="ResetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7"></a>

```go
func ResetS7()
```

##### `ResetS8` <a name="ResetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8"></a>

```go
func ResetS8()
```

##### `ResetS9` <a name="ResetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9"></a>

```go
func ResetS9()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input">P1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input">S10Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input">S11Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input">S12Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input">S13Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input">S1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input">S2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input">S3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input">S4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input">S5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input">S6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input">S7Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input">S8Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input">S9Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1">P1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1">S1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10">S10</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11">S11</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12">S12</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13">S13</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2">S2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3">S3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4">S4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5">S5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6">S6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7">S7</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8">S8</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9">S9</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `P1Input`<sup>Optional</sup> <a name="P1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input"></a>

```go
func P1Input() *string
```

- *Type:* *string

---

##### `S10Input`<sup>Optional</sup> <a name="S10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input"></a>

```go
func S10Input() *string
```

- *Type:* *string

---

##### `S11Input`<sup>Optional</sup> <a name="S11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input"></a>

```go
func S11Input() *string
```

- *Type:* *string

---

##### `S12Input`<sup>Optional</sup> <a name="S12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input"></a>

```go
func S12Input() *string
```

- *Type:* *string

---

##### `S13Input`<sup>Optional</sup> <a name="S13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input"></a>

```go
func S13Input() *string
```

- *Type:* *string

---

##### `S1Input`<sup>Optional</sup> <a name="S1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input"></a>

```go
func S1Input() *string
```

- *Type:* *string

---

##### `S2Input`<sup>Optional</sup> <a name="S2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input"></a>

```go
func S2Input() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input"></a>

```go
func S3Input() *string
```

- *Type:* *string

---

##### `S4Input`<sup>Optional</sup> <a name="S4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input"></a>

```go
func S4Input() *string
```

- *Type:* *string

---

##### `S5Input`<sup>Optional</sup> <a name="S5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input"></a>

```go
func S5Input() *string
```

- *Type:* *string

---

##### `S6Input`<sup>Optional</sup> <a name="S6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input"></a>

```go
func S6Input() *string
```

- *Type:* *string

---

##### `S7Input`<sup>Optional</sup> <a name="S7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input"></a>

```go
func S7Input() *string
```

- *Type:* *string

---

##### `S8Input`<sup>Optional</sup> <a name="S8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input"></a>

```go
func S8Input() *string
```

- *Type:* *string

---

##### `S9Input`<sup>Optional</sup> <a name="S9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input"></a>

```go
func S9Input() *string
```

- *Type:* *string

---

##### `P1`<sup>Required</sup> <a name="P1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1"></a>

```go
func P1() *string
```

- *Type:* *string

---

##### `S1`<sup>Required</sup> <a name="S1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1"></a>

```go
func S1() *string
```

- *Type:* *string

---

##### `S10`<sup>Required</sup> <a name="S10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10"></a>

```go
func S10() *string
```

- *Type:* *string

---

##### `S11`<sup>Required</sup> <a name="S11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11"></a>

```go
func S11() *string
```

- *Type:* *string

---

##### `S12`<sup>Required</sup> <a name="S12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12"></a>

```go
func S12() *string
```

- *Type:* *string

---

##### `S13`<sup>Required</sup> <a name="S13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13"></a>

```go
func S13() *string
```

- *Type:* *string

---

##### `S2`<sup>Required</sup> <a name="S2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2"></a>

```go
func S2() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3"></a>

```go
func S3() *string
```

- *Type:* *string

---

##### `S4`<sup>Required</sup> <a name="S4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4"></a>

```go
func S4() *string
```

- *Type:* *string

---

##### `S5`<sup>Required</sup> <a name="S5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5"></a>

```go
func S5() *string
```

- *Type:* *string

---

##### `S6`<sup>Required</sup> <a name="S6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6"></a>

```go
func S6() *string
```

- *Type:* *string

---

##### `S7`<sup>Required</sup> <a name="S7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7"></a>

```go
func S7() *string
```

- *Type:* *string

---

##### `S8`<sup>Required</sup> <a name="S8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8"></a>

```go
func S8() *string
```

- *Type:* *string

---

##### `S9`<sup>Required</sup> <a name="S9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9"></a>

```go
func S9() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayOtelList <a name="AiGatewayOtelList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayOtelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayOtelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get"></a>

```go
func Get(index *f64) AiGatewayOtelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayOtelOutputReference <a name="AiGatewayOtelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayOtelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayOtelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType"></a>

```go
func ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsOutputReference <a name="AiGatewaySpendLimitsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewaySpendLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules"></a>

```go
func Rules() AiGatewaySpendLimitsRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference <a name="AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesList <a name="AiGatewaySpendLimitsRulesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewaySpendLimitsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get"></a>

```go
func Get(index *f64) AiGatewaySpendLimitsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesMetadataMap <a name="AiGatewaySpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesMetadataMap(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewaySpendLimitsRulesMetadataMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get"></a>

```go
func Get(key *string) AiGatewaySpendLimitsRulesMetadataOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesMetadataOutputReference <a name="AiGatewaySpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) AiGatewaySpendLimitsRulesMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesModelOutputReference <a name="AiGatewaySpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewaySpendLimitsRulesModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewaySpendLimitsRulesOutputReference <a name="AiGatewaySpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewaySpendLimitsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewaySpendLimitsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider">PutAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel">PutModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider">ResetAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique">ResetTechnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAiGatewayProvider` <a name="PutAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider"></a>

```go
func PutAiGatewayProvider(value AiGatewaySpendLimitsRulesAiGatewayProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata"></a>

```go
func PutMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModel` <a name="PutModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel"></a>

```go
func PutModel(value AiGatewaySpendLimitsRulesModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `ResetAiGatewayProvider` <a name="ResetAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider"></a>

```go
func ResetAiGatewayProvider()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique"></a>

```go
func ResetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider">AiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model">Model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput">AiGatewayProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput">LimitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput">ModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput">WindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType">LimitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window">Window</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiGatewayProvider`<sup>Required</sup> <a name="AiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```go
func AiGatewayProvider() AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata"></a>

```go
func Metadata() AiGatewaySpendLimitsRulesMetadataMap
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a>

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model"></a>

```go
func Model() AiGatewaySpendLimitsRulesModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a>

---

##### `AiGatewayProviderInput`<sup>Optional</sup> <a name="AiGatewayProviderInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput"></a>

```go
func AiGatewayProviderInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `LimitTypeInput`<sup>Optional</sup> <a name="LimitTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput"></a>

```go
func LimitTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput"></a>

```go
func ModelInput() interface{}
```

- *Type:* interface{}

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput"></a>

```go
func TechniqueInput() *string
```

- *Type:* *string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput"></a>

```go
func WindowInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType"></a>

```go
func LimitType() *string
```

- *Type:* *string

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window"></a>

```go
func Window() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayStripeOutputReference <a name="AiGatewayStripeOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayStripeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayStripeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents">PutUsageEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsageEvents` <a name="PutUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents"></a>

```go
func PutUsageEvents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents">UsageEvents</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput">UsageEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsageEvents`<sup>Required</sup> <a name="UsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents"></a>

```go
func UsageEvents() AiGatewayStripeUsageEventsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `UsageEventsInput`<sup>Optional</sup> <a name="UsageEventsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput"></a>

```go
func UsageEventsInput() interface{}
```

- *Type:* interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayStripeUsageEventsList <a name="AiGatewayStripeUsageEventsList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayStripeUsageEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayStripeUsageEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get"></a>

```go
func Get(index *f64) AiGatewayStripeUsageEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayStripeUsageEventsOutputReference <a name="AiGatewayStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/aigateway"

aigateway.NewAiGatewayStripeUsageEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayStripeUsageEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




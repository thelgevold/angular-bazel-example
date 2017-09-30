
import { Cmp9601Component } from './cmp';
describe('Cmp9601Component', () => {
  it('should add', () => {
    expect(new Cmp9601Component().add9601(1)).toBe(9602);
  });
});
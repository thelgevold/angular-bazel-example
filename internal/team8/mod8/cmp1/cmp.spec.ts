
import { Cmp8881Component } from './cmp';
describe('Cmp8881Component', () => {
  it('should add', () => {
    expect(new Cmp8881Component().add8881(1)).toBe(8882);
  });
});
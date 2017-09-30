
import { Cmp8405Component } from './cmp';
describe('Cmp8405Component', () => {
  it('should add', () => {
    expect(new Cmp8405Component().add8405(1)).toBe(8406);
  });
});
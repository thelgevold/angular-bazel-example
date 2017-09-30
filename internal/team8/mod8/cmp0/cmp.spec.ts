
import { Cmp8880Component } from './cmp';
describe('Cmp8880Component', () => {
  it('should add', () => {
    expect(new Cmp8880Component().add8880(1)).toBe(8881);
  });
});
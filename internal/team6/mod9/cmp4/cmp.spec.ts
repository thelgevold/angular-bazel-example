
import { Cmp8694Component } from './cmp';
describe('Cmp8694Component', () => {
  it('should add', () => {
    expect(new Cmp8694Component().add8694(1)).toBe(8695);
  });
});
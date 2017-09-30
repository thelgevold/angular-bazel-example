
import { Cmp8979Component } from './cmp';
describe('Cmp8979Component', () => {
  it('should add', () => {
    expect(new Cmp8979Component().add8979(1)).toBe(8980);
  });
});
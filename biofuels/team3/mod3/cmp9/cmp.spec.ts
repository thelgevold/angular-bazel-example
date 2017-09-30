
import { Cmp1339Component } from './cmp';
describe('Cmp1339Component', () => {
  it('should add', () => {
    expect(new Cmp1339Component().add1339(1)).toBe(1340);
  });
});
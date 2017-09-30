
import { Cmp1565Component } from './cmp';
describe('Cmp1565Component', () => {
  it('should add', () => {
    expect(new Cmp1565Component().add1565(1)).toBe(1566);
  });
});
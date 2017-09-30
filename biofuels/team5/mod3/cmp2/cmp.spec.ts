
import { Cmp1532Component } from './cmp';
describe('Cmp1532Component', () => {
  it('should add', () => {
    expect(new Cmp1532Component().add1532(1)).toBe(1533);
  });
});
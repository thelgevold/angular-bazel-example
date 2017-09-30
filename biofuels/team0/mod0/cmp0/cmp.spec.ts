
import { Cmp1000Component } from './cmp';
describe('Cmp1000Component', () => {
  it('should add', () => {
    expect(new Cmp1000Component().add1000(1)).toBe(1001);
  });
});
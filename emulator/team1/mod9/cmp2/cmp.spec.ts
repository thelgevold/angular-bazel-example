
import { Cmp4192Component } from './cmp';
describe('Cmp4192Component', () => {
  it('should add', () => {
    expect(new Cmp4192Component().add4192(1)).toBe(4193);
  });
});

import { Cmp4400Component } from './cmp';
describe('Cmp4400Component', () => {
  it('should add', () => {
    expect(new Cmp4400Component().add4400(1)).toBe(4401);
  });
});
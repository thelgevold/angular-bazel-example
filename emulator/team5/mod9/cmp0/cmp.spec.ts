
import { Cmp4590Component } from './cmp';
describe('Cmp4590Component', () => {
  it('should add', () => {
    expect(new Cmp4590Component().add4590(1)).toBe(4591);
  });
});
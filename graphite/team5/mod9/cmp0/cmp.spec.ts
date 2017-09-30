
import { Cmp6590Component } from './cmp';
describe('Cmp6590Component', () => {
  it('should add', () => {
    expect(new Cmp6590Component().add6590(1)).toBe(6591);
  });
});
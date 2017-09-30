
import { Cmp6213Component } from './cmp';
describe('Cmp6213Component', () => {
  it('should add', () => {
    expect(new Cmp6213Component().add6213(1)).toBe(6214);
  });
});
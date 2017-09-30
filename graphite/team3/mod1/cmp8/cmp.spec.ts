
import { Cmp6318Component } from './cmp';
describe('Cmp6318Component', () => {
  it('should add', () => {
    expect(new Cmp6318Component().add6318(1)).toBe(6319);
  });
});

import { Cmp6522Component } from './cmp';
describe('Cmp6522Component', () => {
  it('should add', () => {
    expect(new Cmp6522Component().add6522(1)).toBe(6523);
  });
});
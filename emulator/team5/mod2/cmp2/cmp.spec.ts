
import { Cmp4522Component } from './cmp';
describe('Cmp4522Component', () => {
  it('should add', () => {
    expect(new Cmp4522Component().add4522(1)).toBe(4523);
  });
});
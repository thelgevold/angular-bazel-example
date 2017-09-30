
import { Cmp1522Component } from './cmp';
describe('Cmp1522Component', () => {
  it('should add', () => {
    expect(new Cmp1522Component().add1522(1)).toBe(1523);
  });
});
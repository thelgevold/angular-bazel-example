
import { Cmp7072Component } from './cmp';
describe('Cmp7072Component', () => {
  it('should add', () => {
    expect(new Cmp7072Component().add7072(1)).toBe(7073);
  });
});
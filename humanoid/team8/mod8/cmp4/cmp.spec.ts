
import { Cmp7884Component } from './cmp';
describe('Cmp7884Component', () => {
  it('should add', () => {
    expect(new Cmp7884Component().add7884(1)).toBe(7885);
  });
});
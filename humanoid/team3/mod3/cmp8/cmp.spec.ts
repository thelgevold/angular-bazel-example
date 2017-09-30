
import { Cmp7338Component } from './cmp';
describe('Cmp7338Component', () => {
  it('should add', () => {
    expect(new Cmp7338Component().add7338(1)).toBe(7339);
  });
});
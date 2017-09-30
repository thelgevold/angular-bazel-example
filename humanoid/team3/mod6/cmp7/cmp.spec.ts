
import { Cmp7367Component } from './cmp';
describe('Cmp7367Component', () => {
  it('should add', () => {
    expect(new Cmp7367Component().add7367(1)).toBe(7368);
  });
});
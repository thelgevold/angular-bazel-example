
import { Cmp7637Component } from './cmp';
describe('Cmp7637Component', () => {
  it('should add', () => {
    expect(new Cmp7637Component().add7637(1)).toBe(7638);
  });
});
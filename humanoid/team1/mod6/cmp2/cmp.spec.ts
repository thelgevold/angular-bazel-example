
import { Cmp7162Component } from './cmp';
describe('Cmp7162Component', () => {
  it('should add', () => {
    expect(new Cmp7162Component().add7162(1)).toBe(7163);
  });
});
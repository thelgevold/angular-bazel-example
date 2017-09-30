
import { Cmp7094Component } from './cmp';
describe('Cmp7094Component', () => {
  it('should add', () => {
    expect(new Cmp7094Component().add7094(1)).toBe(7095);
  });
});
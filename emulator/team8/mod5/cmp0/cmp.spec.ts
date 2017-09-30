
import { Cmp4850Component } from './cmp';
describe('Cmp4850Component', () => {
  it('should add', () => {
    expect(new Cmp4850Component().add4850(1)).toBe(4851);
  });
});
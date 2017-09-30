
import { Cmp4363Component } from './cmp';
describe('Cmp4363Component', () => {
  it('should add', () => {
    expect(new Cmp4363Component().add4363(1)).toBe(4364);
  });
});
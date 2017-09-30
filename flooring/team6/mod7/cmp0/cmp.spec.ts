
import { Cmp5670Component } from './cmp';
describe('Cmp5670Component', () => {
  it('should add', () => {
    expect(new Cmp5670Component().add5670(1)).toBe(5671);
  });
});
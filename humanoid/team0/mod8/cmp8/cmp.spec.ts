
import { Cmp7088Component } from './cmp';
describe('Cmp7088Component', () => {
  it('should add', () => {
    expect(new Cmp7088Component().add7088(1)).toBe(7089);
  });
});
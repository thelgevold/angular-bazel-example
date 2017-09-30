
import { Cmp3390Component } from './cmp';
describe('Cmp3390Component', () => {
  it('should add', () => {
    expect(new Cmp3390Component().add3390(1)).toBe(3391);
  });
});
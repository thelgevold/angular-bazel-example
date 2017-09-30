
import { Cmp7607Component } from './cmp';
describe('Cmp7607Component', () => {
  it('should add', () => {
    expect(new Cmp7607Component().add7607(1)).toBe(7608);
  });
});